# `aws_appmesh_route`

Refer to the Terraform Registory for docs: [`aws_appmesh_route`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route).

# `appmeshRoute` Submodule <a name="`appmeshRoute` Submodule" id="@cdktf/aws-cdk.appmeshRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppmeshRoute <a name="AppmeshRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route aws_appmesh_route}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRoute(scope: Construct, id: string, config: AppmeshRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig">AppmeshRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig">AppmeshRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetMeshOwner">resetMeshOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSpec` <a name="putSpec" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.putSpec"></a>

```typescript
public putSpec(value: AppmeshRouteSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMeshOwner` <a name="resetMeshOwner" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetMeshOwner"></a>

```typescript
public resetMeshOwner(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isConstruct"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

appmeshRoute.AppmeshRoute.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isTerraformElement"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

appmeshRoute.AppmeshRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isTerraformResource"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

appmeshRoute.AppmeshRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.spec">spec</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference">AppmeshRouteSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.meshNameInput">meshNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.meshOwnerInput">meshOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.specInput">specInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.virtualRouterNameInput">virtualRouterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.meshName">meshName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.meshOwner">meshOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.spec"></a>

```typescript
public readonly spec: AppmeshRouteSpecOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference">AppmeshRouteSpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `meshNameInput`<sup>Optional</sup> <a name="meshNameInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.meshNameInput"></a>

```typescript
public readonly meshNameInput: string;
```

- *Type:* string

---

##### `meshOwnerInput`<sup>Optional</sup> <a name="meshOwnerInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.meshOwnerInput"></a>

```typescript
public readonly meshOwnerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.specInput"></a>

```typescript
public readonly specInput: AppmeshRouteSpec;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualRouterNameInput`<sup>Optional</sup> <a name="virtualRouterNameInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.virtualRouterNameInput"></a>

```typescript
public readonly virtualRouterNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

---

##### `meshOwner`<sup>Required</sup> <a name="meshOwner" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppmeshRouteConfig <a name="AppmeshRouteConfig" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteConfig: appmeshRoute.AppmeshRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.meshName">meshName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#mesh_name AppmeshRoute#mesh_name}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | spec block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.virtualRouterName">virtualRouterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#id AppmeshRoute#id}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.meshOwner">meshOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tags AppmeshRoute#tags}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tags_all AppmeshRoute#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `meshName`<sup>Required</sup> <a name="meshName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.meshName"></a>

```typescript
public readonly meshName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#mesh_name AppmeshRoute#mesh_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#name AppmeshRoute#name}.

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.spec"></a>

```typescript
public readonly spec: AppmeshRouteSpec;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#spec AppmeshRoute#spec}

---

##### `virtualRouterName`<sup>Required</sup> <a name="virtualRouterName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.virtualRouterName"></a>

```typescript
public readonly virtualRouterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#id AppmeshRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `meshOwner`<sup>Optional</sup> <a name="meshOwner" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.meshOwner"></a>

```typescript
public readonly meshOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tags AppmeshRoute#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tags_all AppmeshRoute#tags_all}.

---

### AppmeshRouteSpec <a name="AppmeshRouteSpec" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpec: appmeshRoute.AppmeshRouteSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.grpcRoute">grpcRoute</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | grpc_route block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.http2Route">http2Route</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | http2_route block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | http_route block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#priority AppmeshRoute#priority}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.tcpRoute">tcpRoute</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | tcp_route block. |

---

##### `grpcRoute`<sup>Optional</sup> <a name="grpcRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.grpcRoute"></a>

```typescript
public readonly grpcRoute: AppmeshRouteSpecGrpcRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

grpc_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#grpc_route AppmeshRoute#grpc_route}

---

##### `http2Route`<sup>Optional</sup> <a name="http2Route" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.http2Route"></a>

```typescript
public readonly http2Route: AppmeshRouteSpecHttp2Route;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

http2_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#http2_route AppmeshRoute#http2_route}

---

##### `httpRoute`<sup>Optional</sup> <a name="httpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.httpRoute"></a>

```typescript
public readonly httpRoute: AppmeshRouteSpecHttpRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

http_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#http_route AppmeshRoute#http_route}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#priority AppmeshRoute#priority}.

---

##### `tcpRoute`<sup>Optional</sup> <a name="tcpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec.property.tcpRoute"></a>

```typescript
public readonly tcpRoute: AppmeshRouteSpecTcpRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

tcp_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tcp_route AppmeshRoute#tcp_route}

---

### AppmeshRouteSpecGrpcRoute <a name="AppmeshRouteSpecGrpcRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRoute: appmeshRoute.AppmeshRouteSpecGrpcRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.action"></a>

```typescript
public readonly action: AppmeshRouteSpecGrpcRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecGrpcRouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#match AppmeshRoute#match}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: AppmeshRouteSpecGrpcRouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute.property.timeout"></a>

```typescript
public readonly timeout: AppmeshRouteSpecGrpcRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecGrpcRouteAction <a name="AppmeshRouteSpecGrpcRouteAction" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteAction: appmeshRoute.AppmeshRouteSpecGrpcRouteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.property.weightedTarget">weightedTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>[]</code> | weighted_target block. |

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction.property.weightedTarget"></a>

```typescript
public readonly weightedTarget: IResolvable | AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>[]

weighted_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecGrpcRouteActionWeightedTarget <a name="AppmeshRouteSpecGrpcRouteActionWeightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteActionWeightedTarget: appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.virtualNode">virtualNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weight AppmeshRoute#weight}. |

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.virtualNode"></a>

```typescript
public readonly virtualNode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weight AppmeshRoute#weight}.

---

### AppmeshRouteSpecGrpcRouteMatch <a name="AppmeshRouteSpecGrpcRouteMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteMatch: appmeshRoute.AppmeshRouteSpecGrpcRouteMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.metadata">metadata</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>[]</code> | metadata block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.methodName">methodName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#method_name AppmeshRoute#method_name}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.serviceName">serviceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#service_name AppmeshRoute#service_name}. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.metadata"></a>

```typescript
public readonly metadata: IResolvable | AppmeshRouteSpecGrpcRouteMatchMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>[]

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#metadata AppmeshRoute#metadata}

---

##### `methodName`<sup>Optional</sup> <a name="methodName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.methodName"></a>

```typescript
public readonly methodName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#method_name AppmeshRoute#method_name}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#service_name AppmeshRoute#service_name}.

---

### AppmeshRouteSpecGrpcRouteMatchMetadata <a name="AppmeshRouteSpecGrpcRouteMatchMetadata" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteMatchMetadata: appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecGrpcRouteMatchMetadataMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecGrpcRouteMatchMetadataMatch <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteMatchMetadataMatch: appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.range">range</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.range"></a>

```typescript
public readonly range: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteMatchMetadataMatchRange: appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.end">end</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.start">start</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecGrpcRouteRetryPolicy <a name="AppmeshRouteSpecGrpcRouteRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteRetryPolicy: appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.maxRetries">maxRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents">grpcRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents">httpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.perRetryTimeout"></a>

```typescript
public readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `grpcRetryEvents`<sup>Optional</sup> <a name="grpcRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.grpcRetryEvents"></a>

```typescript
public readonly grpcRetryEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}.

---

##### `httpRetryEvents`<sup>Optional</sup> <a name="httpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.httpRetryEvents"></a>

```typescript
public readonly httpRetryEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcpRetryEvents`<sup>Optional</sup> <a name="tcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy.property.tcpRetryEvents"></a>

```typescript
public readonly tcpRetryEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout: appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecGrpcRouteTimeout <a name="AppmeshRouteSpecGrpcRouteTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteTimeout: appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.idle"></a>

```typescript
public readonly idle: AppmeshRouteSpecGrpcRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#idle AppmeshRoute#idle}

---

##### `perRequest`<sup>Optional</sup> <a name="perRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout.property.perRequest"></a>

```typescript
public readonly perRequest: AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecGrpcRouteTimeoutIdle <a name="AppmeshRouteSpecGrpcRouteTimeoutIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteTimeoutIdle: appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecGrpcRouteTimeoutPerRequest <a name="AppmeshRouteSpecGrpcRouteTimeoutPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecGrpcRouteTimeoutPerRequest: appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2Route <a name="AppmeshRouteSpecHttp2Route" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2Route: appmeshRoute.AppmeshRouteSpecHttp2Route = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | action block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.property.timeout">timeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.property.action"></a>

```typescript
public readonly action: AppmeshRouteSpecHttp2RouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecHttp2RouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#match AppmeshRoute#match}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: AppmeshRouteSpecHttp2RouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route.property.timeout"></a>

```typescript
public readonly timeout: AppmeshRouteSpecHttp2RouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecHttp2RouteAction <a name="AppmeshRouteSpecHttp2RouteAction" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteAction: appmeshRoute.AppmeshRouteSpecHttp2RouteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.property.weightedTarget">weightedTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>[]</code> | weighted_target block. |

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction.property.weightedTarget"></a>

```typescript
public readonly weightedTarget: IResolvable | AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>[]

weighted_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecHttp2RouteActionWeightedTarget <a name="AppmeshRouteSpecHttp2RouteActionWeightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteActionWeightedTarget: appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.virtualNode">virtualNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weight AppmeshRoute#weight}. |

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.virtualNode"></a>

```typescript
public readonly virtualNode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weight AppmeshRoute#weight}.

---

### AppmeshRouteSpecHttp2RouteMatch <a name="AppmeshRouteSpecHttp2RouteMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteMatch: appmeshRoute.AppmeshRouteSpecHttp2RouteMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#method AppmeshRoute#method}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#scheme AppmeshRoute#scheme}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.header"></a>

```typescript
public readonly header: IResolvable | AppmeshRouteSpecHttp2RouteMatchHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#header AppmeshRoute#header}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#method AppmeshRoute#method}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#scheme AppmeshRoute#scheme}.

---

### AppmeshRouteSpecHttp2RouteMatchHeader <a name="AppmeshRouteSpecHttp2RouteMatchHeader" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteMatchHeader: appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecHttp2RouteMatchHeaderMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecHttp2RouteMatchHeaderMatch <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteMatchHeaderMatch: appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.range">range</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.range"></a>

```typescript
public readonly range: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteMatchHeaderMatchRange: appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.end">end</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.start">start</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecHttp2RouteRetryPolicy <a name="AppmeshRouteSpecHttp2RouteRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteRetryPolicy: appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.maxRetries">maxRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents">httpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.perRetryTimeout"></a>

```typescript
public readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `httpRetryEvents`<sup>Optional</sup> <a name="httpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.httpRetryEvents"></a>

```typescript
public readonly httpRetryEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcpRetryEvents`<sup>Optional</sup> <a name="tcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy.property.tcpRetryEvents"></a>

```typescript
public readonly tcpRetryEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout: appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2RouteTimeout <a name="AppmeshRouteSpecHttp2RouteTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteTimeout: appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.idle"></a>

```typescript
public readonly idle: AppmeshRouteSpecHttp2RouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#idle AppmeshRoute#idle}

---

##### `perRequest`<sup>Optional</sup> <a name="perRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout.property.perRequest"></a>

```typescript
public readonly perRequest: AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecHttp2RouteTimeoutIdle <a name="AppmeshRouteSpecHttp2RouteTimeoutIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteTimeoutIdle: appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttp2RouteTimeoutPerRequest <a name="AppmeshRouteSpecHttp2RouteTimeoutPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttp2RouteTimeoutPerRequest: appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRoute <a name="AppmeshRouteSpecHttpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRoute: appmeshRoute.AppmeshRouteSpecHttpRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | match block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.property.action"></a>

```typescript
public readonly action: AppmeshRouteSpecHttpRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#action AppmeshRoute#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecHttpRouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#match AppmeshRoute#match}

---

##### `retryPolicy`<sup>Optional</sup> <a name="retryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: AppmeshRouteSpecHttpRouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#retry_policy AppmeshRoute#retry_policy}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute.property.timeout"></a>

```typescript
public readonly timeout: AppmeshRouteSpecHttpRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecHttpRouteAction <a name="AppmeshRouteSpecHttpRouteAction" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteAction: appmeshRoute.AppmeshRouteSpecHttpRouteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction.property.weightedTarget">weightedTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>[]</code> | weighted_target block. |

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction.property.weightedTarget"></a>

```typescript
public readonly weightedTarget: IResolvable | AppmeshRouteSpecHttpRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>[]

weighted_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecHttpRouteActionWeightedTarget <a name="AppmeshRouteSpecHttpRouteActionWeightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteActionWeightedTarget: appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.virtualNode">virtualNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weight AppmeshRoute#weight}. |

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.virtualNode"></a>

```typescript
public readonly virtualNode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weight AppmeshRoute#weight}.

---

### AppmeshRouteSpecHttpRouteMatch <a name="AppmeshRouteSpecHttpRouteMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteMatch: appmeshRoute.AppmeshRouteSpecHttpRouteMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>[]</code> | header block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#method AppmeshRoute#method}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#scheme AppmeshRoute#scheme}. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.header"></a>

```typescript
public readonly header: IResolvable | AppmeshRouteSpecHttpRouteMatchHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#header AppmeshRoute#header}

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#method AppmeshRoute#method}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#scheme AppmeshRoute#scheme}.

---

### AppmeshRouteSpecHttpRouteMatchHeader <a name="AppmeshRouteSpecHttpRouteMatchHeader" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteMatchHeader: appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#name AppmeshRoute#name}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#invert AppmeshRoute#invert}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | match block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#name AppmeshRoute#name}.

---

##### `invert`<sup>Optional</sup> <a name="invert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#invert AppmeshRoute#invert}.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecHttpRouteMatchHeaderMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#match AppmeshRoute#match}

---

### AppmeshRouteSpecHttpRouteMatchHeaderMatch <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteMatchHeaderMatch: appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#exact AppmeshRoute#exact}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.range">range</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | range block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#regex AppmeshRoute#regex}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.suffix">suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#exact AppmeshRoute#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}.

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.range"></a>

```typescript
public readonly range: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#range AppmeshRoute#range}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#regex AppmeshRoute#regex}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}.

---

### AppmeshRouteSpecHttpRouteMatchHeaderMatchRange <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteMatchHeaderMatchRange: appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.end">end</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#end AppmeshRoute#end}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.start">start</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#start AppmeshRoute#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#end AppmeshRoute#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#start AppmeshRoute#start}.

---

### AppmeshRouteSpecHttpRouteRetryPolicy <a name="AppmeshRouteSpecHttpRouteRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteRetryPolicy: appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.maxRetries">maxRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | per_retry_timeout block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents">httpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}. |

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}.

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.perRetryTimeout"></a>

```typescript
public readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

per_retry_timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}

---

##### `httpRetryEvents`<sup>Optional</sup> <a name="httpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.httpRetryEvents"></a>

```typescript
public readonly httpRetryEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}.

---

##### `tcpRetryEvents`<sup>Optional</sup> <a name="tcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy.property.tcpRetryEvents"></a>

```typescript
public readonly tcpRetryEvents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}.

---

### AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout <a name="AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout: appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRouteTimeout <a name="AppmeshRouteSpecHttpRouteTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteTimeout: appmeshRoute.AppmeshRouteSpecHttpRouteTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | idle block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | per_request block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.idle"></a>

```typescript
public readonly idle: AppmeshRouteSpecHttpRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#idle AppmeshRoute#idle}

---

##### `perRequest`<sup>Optional</sup> <a name="perRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout.property.perRequest"></a>

```typescript
public readonly perRequest: AppmeshRouteSpecHttpRouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

per_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#per_request AppmeshRoute#per_request}

---

### AppmeshRouteSpecHttpRouteTimeoutIdle <a name="AppmeshRouteSpecHttpRouteTimeoutIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteTimeoutIdle: appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecHttpRouteTimeoutPerRequest <a name="AppmeshRouteSpecHttpRouteTimeoutPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecHttpRouteTimeoutPerRequest: appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

### AppmeshRouteSpecTcpRoute <a name="AppmeshRouteSpecTcpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecTcpRoute: appmeshRoute.AppmeshRouteSpecTcpRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | action block. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute.property.timeout">timeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | timeout block. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute.property.action"></a>

```typescript
public readonly action: AppmeshRouteSpecTcpRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#action AppmeshRoute#action}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute.property.timeout"></a>

```typescript
public readonly timeout: AppmeshRouteSpecTcpRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

timeout block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#timeout AppmeshRoute#timeout}

---

### AppmeshRouteSpecTcpRouteAction <a name="AppmeshRouteSpecTcpRouteAction" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecTcpRouteAction: appmeshRoute.AppmeshRouteSpecTcpRouteAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction.property.weightedTarget">weightedTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>[]</code> | weighted_target block. |

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction.property.weightedTarget"></a>

```typescript
public readonly weightedTarget: IResolvable | AppmeshRouteSpecTcpRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>[]

weighted_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weighted_target AppmeshRoute#weighted_target}

---

### AppmeshRouteSpecTcpRouteActionWeightedTarget <a name="AppmeshRouteSpecTcpRouteActionWeightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecTcpRouteActionWeightedTarget: appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.virtualNode">virtualNode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weight AppmeshRoute#weight}. |

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.virtualNode"></a>

```typescript
public readonly virtualNode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#weight AppmeshRoute#weight}.

---

### AppmeshRouteSpecTcpRouteTimeout <a name="AppmeshRouteSpecTcpRouteTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecTcpRouteTimeout: appmeshRoute.AppmeshRouteSpecTcpRouteTimeout = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.property.idle">idle</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | idle block. |

---

##### `idle`<sup>Optional</sup> <a name="idle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout.property.idle"></a>

```typescript
public readonly idle: AppmeshRouteSpecTcpRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

idle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#idle AppmeshRoute#idle}

---

### AppmeshRouteSpecTcpRouteTimeoutIdle <a name="AppmeshRouteSpecTcpRouteTimeoutIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

const appmeshRouteSpecTcpRouteTimeoutIdle: appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.value">value</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}. |

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#unit AppmeshRoute#unit}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_route#value AppmeshRoute#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppmeshRouteSpecGrpcRouteActionOutputReference <a name="AppmeshRouteSpecGrpcRouteActionOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget">putWeightedTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeightedTarget` <a name="putWeightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget"></a>

```typescript
public putWeightedTarget(value: IResolvable | AppmeshRouteSpecGrpcRouteActionWeightedTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTarget">weightedTarget</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList">AppmeshRouteSpecGrpcRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTargetInput">weightedTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTarget"></a>

```typescript
public readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList">AppmeshRouteSpecGrpcRouteActionWeightedTargetList</a>

---

##### `weightedTargetInput`<sup>Optional</sup> <a name="weightedTargetInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.weightedTargetInput"></a>

```typescript
public readonly weightedTargetInput: IResolvable | AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---


### AppmeshRouteSpecGrpcRouteActionWeightedTargetList <a name="AppmeshRouteSpecGrpcRouteActionWeightedTargetList" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get"></a>

```typescript
public get(index: number): AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>[]

---


### AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtualNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNode">virtualNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualNodeInput`<sup>Optional</sup> <a name="virtualNodeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```typescript
public readonly virtualNodeInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```typescript
public readonly virtualNode: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecGrpcRouteActionWeightedTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionWeightedTarget">AppmeshRouteSpecGrpcRouteActionWeightedTarget</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataList <a name="AppmeshRouteSpecGrpcRouteMatchMetadataList" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get"></a>

```typescript
public get(index: number): AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecGrpcRouteMatchMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>[]

---


### AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange"></a>

```typescript
public putRange(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---

##### `resetExact` <a name="resetExact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetRange` <a name="resetRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.range"></a>

```typescript
public readonly range: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference</a>

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteMatchMetadataMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange">AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange</a>

---


### AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---

##### `resetInvert` <a name="resetInvert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetInvert"></a>

```typescript
public resetInvert(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invertInput">invertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference</a>

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invertInput"></a>

```typescript
public readonly invertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshRouteSpecGrpcRouteMatchMetadataMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataMatch">AppmeshRouteSpecGrpcRouteMatchMetadataMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecGrpcRouteMatchMetadata;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>

---


### AppmeshRouteSpecGrpcRouteMatchOutputReference <a name="AppmeshRouteSpecGrpcRouteMatchOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMethodName">resetMethodName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetadata` <a name="putMetadata" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata"></a>

```typescript
public putMetadata(value: IResolvable | AppmeshRouteSpecGrpcRouteMatchMetadata[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.putMetadata.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>[]

---

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMethodName` <a name="resetMethodName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetMethodName"></a>

```typescript
public resetMethodName(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList">AppmeshRouteSpecGrpcRouteMatchMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadataInput">metadataInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodNameInput">methodNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodName">methodName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadata"></a>

```typescript
public readonly metadata: AppmeshRouteSpecGrpcRouteMatchMetadataList;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadataList">AppmeshRouteSpecGrpcRouteMatchMetadataList</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | AppmeshRouteSpecGrpcRouteMatchMetadata[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchMetadata">AppmeshRouteSpecGrpcRouteMatchMetadata</a>[]

---

##### `methodNameInput`<sup>Optional</sup> <a name="methodNameInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodNameInput"></a>

```typescript
public readonly methodNameInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `methodName`<sup>Required</sup> <a name="methodName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.methodName"></a>

```typescript
public readonly methodName: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---


### AppmeshRouteSpecGrpcRouteOutputReference <a name="AppmeshRouteSpecGrpcRouteOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction"></a>

```typescript
public putAction(value: AppmeshRouteSpecGrpcRouteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshRouteSpecGrpcRouteMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: AppmeshRouteSpecGrpcRouteRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout"></a>

```typescript
public putTimeout(value: AppmeshRouteSpecGrpcRouteTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---

##### `resetMatch` <a name="resetMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference">AppmeshRouteSpecGrpcRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference">AppmeshRouteSpecGrpcRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.action"></a>

```typescript
public readonly action: AppmeshRouteSpecGrpcRouteActionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteActionOutputReference">AppmeshRouteSpecGrpcRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecGrpcRouteMatchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatchOutputReference">AppmeshRouteSpecGrpcRouteMatchOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeout"></a>

```typescript
public readonly timeout: AppmeshRouteSpecGrpcRouteTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference">AppmeshRouteSpecGrpcRouteTimeoutOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: AppmeshRouteSpecGrpcRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteAction">AppmeshRouteSpecGrpcRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshRouteSpecGrpcRouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteMatch">AppmeshRouteSpecGrpcRouteMatch</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: AppmeshRouteSpecGrpcRouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: AppmeshRouteSpecGrpcRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---


### AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference <a name="AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout">putPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetGrpcRetryEvents">resetGrpcRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetHttpRetryEvents">resetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetTcpRetryEvents">resetTcpRetryEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPerRetryTimeout` <a name="putPerRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```typescript
public putPerRetryTimeout(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---

##### `resetGrpcRetryEvents` <a name="resetGrpcRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetGrpcRetryEvents"></a>

```typescript
public resetGrpcRetryEvents(): void
```

##### `resetHttpRetryEvents` <a name="resetHttpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```typescript
public resetHttpRetryEvents(): void
```

##### `resetTcpRetryEvents` <a name="resetTcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```typescript
public resetTcpRetryEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEventsInput">grpcRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEventsInput">httpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeoutInput">perRetryTimeoutInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEvents">grpcRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEvents">httpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```typescript
public readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `grpcRetryEventsInput`<sup>Optional</sup> <a name="grpcRetryEventsInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEventsInput"></a>

```typescript
public readonly grpcRetryEventsInput: string[];
```

- *Type:* string[]

---

##### `httpRetryEventsInput`<sup>Optional</sup> <a name="httpRetryEventsInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```typescript
public readonly httpRetryEventsInput: string[];
```

- *Type:* string[]

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `perRetryTimeoutInput`<sup>Optional</sup> <a name="perRetryTimeoutInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```typescript
public readonly perRetryTimeoutInput: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---

##### `tcpRetryEventsInput`<sup>Optional</sup> <a name="tcpRetryEventsInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```typescript
public readonly tcpRetryEventsInput: string[];
```

- *Type:* string[]

---

##### `grpcRetryEvents`<sup>Required</sup> <a name="grpcRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.grpcRetryEvents"></a>

```typescript
public readonly grpcRetryEvents: string[];
```

- *Type:* string[]

---

##### `httpRetryEvents`<sup>Required</sup> <a name="httpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```typescript
public readonly httpRetryEvents: string[];
```

- *Type:* string[]

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="tcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```typescript
public readonly tcpRetryEvents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicy">AppmeshRouteSpecGrpcRouteRetryPolicy</a>

---


### AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle">putIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest">putPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetIdle">resetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetPerRequest">resetPerRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdle` <a name="putIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle"></a>

```typescript
public putIdle(value: AppmeshRouteSpecGrpcRouteTimeoutIdle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---

##### `putPerRequest` <a name="putPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest"></a>

```typescript
public putPerRequest(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---

##### `resetIdle` <a name="resetIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetIdle"></a>

```typescript
public resetIdle(): void
```

##### `resetPerRequest` <a name="resetPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.resetPerRequest"></a>

```typescript
public resetPerRequest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference">AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idleInput">idleInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequestInput">perRequestInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idle"></a>

```typescript
public readonly idle: AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference">AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference</a>

---

##### `perRequest`<sup>Required</sup> <a name="perRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequest"></a>

```typescript
public readonly perRequest: AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference</a>

---

##### `idleInput`<sup>Optional</sup> <a name="idleInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.idleInput"></a>

```typescript
public readonly idleInput: AppmeshRouteSpecGrpcRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutIdle">AppmeshRouteSpecGrpcRouteTimeoutIdle</a>

---

##### `perRequestInput`<sup>Optional</sup> <a name="perRequestInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.perRequestInput"></a>

```typescript
public readonly perRequestInput: AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeout">AppmeshRouteSpecGrpcRouteTimeout</a>

---


### AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteTimeoutPerRequest">AppmeshRouteSpecGrpcRouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecHttp2RouteActionOutputReference <a name="AppmeshRouteSpecHttp2RouteActionOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget">putWeightedTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeightedTarget` <a name="putWeightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget"></a>

```typescript
public putWeightedTarget(value: IResolvable | AppmeshRouteSpecHttp2RouteActionWeightedTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTarget">weightedTarget</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList">AppmeshRouteSpecHttp2RouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTargetInput">weightedTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTarget"></a>

```typescript
public readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList">AppmeshRouteSpecHttp2RouteActionWeightedTargetList</a>

---

##### `weightedTargetInput`<sup>Optional</sup> <a name="weightedTargetInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.weightedTargetInput"></a>

```typescript
public readonly weightedTargetInput: IResolvable | AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---


### AppmeshRouteSpecHttp2RouteActionWeightedTargetList <a name="AppmeshRouteSpecHttp2RouteActionWeightedTargetList" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get"></a>

```typescript
public get(index: number): AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>[]

---


### AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtualNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNode">virtualNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualNodeInput`<sup>Optional</sup> <a name="virtualNodeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```typescript
public readonly virtualNodeInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```typescript
public readonly virtualNode: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecHttp2RouteActionWeightedTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionWeightedTarget">AppmeshRouteSpecHttp2RouteActionWeightedTarget</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderList <a name="AppmeshRouteSpecHttp2RouteMatchHeaderList" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get"></a>

```typescript
public get(index: number): AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecHttp2RouteMatchHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>[]

---


### AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange"></a>

```typescript
public putRange(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `resetExact` <a name="resetExact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetRange` <a name="resetRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.range"></a>

```typescript
public readonly range: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference</a>

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteMatchHeaderMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange">AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange</a>

---


### AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `resetInvert` <a name="resetInvert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetInvert"></a>

```typescript
public resetInvert(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput">invertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference</a>

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invertInput"></a>

```typescript
public readonly invertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshRouteSpecHttp2RouteMatchHeaderMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderMatch">AppmeshRouteSpecHttp2RouteMatchHeaderMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecHttp2RouteMatchHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>

---


### AppmeshRouteSpecHttp2RouteMatchOutputReference <a name="AppmeshRouteSpecHttp2RouteMatchOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | AppmeshRouteSpecHttp2RouteMatchHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>[]

---

##### `resetHeader` <a name="resetHeader" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList">AppmeshRouteSpecHttp2RouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.header"></a>

```typescript
public readonly header: AppmeshRouteSpecHttp2RouteMatchHeaderList;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeaderList">AppmeshRouteSpecHttp2RouteMatchHeaderList</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | AppmeshRouteSpecHttp2RouteMatchHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchHeader">AppmeshRouteSpecHttp2RouteMatchHeader</a>[]

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---


### AppmeshRouteSpecHttp2RouteOutputReference <a name="AppmeshRouteSpecHttp2RouteOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction"></a>

```typescript
public putAction(value: AppmeshRouteSpecHttp2RouteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshRouteSpecHttp2RouteMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: AppmeshRouteSpecHttp2RouteRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout"></a>

```typescript
public putTimeout(value: AppmeshRouteSpecHttp2RouteTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference">AppmeshRouteSpecHttp2RouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference">AppmeshRouteSpecHttp2RouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.action"></a>

```typescript
public readonly action: AppmeshRouteSpecHttp2RouteActionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteActionOutputReference">AppmeshRouteSpecHttp2RouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecHttp2RouteMatchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatchOutputReference">AppmeshRouteSpecHttp2RouteMatchOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeout"></a>

```typescript
public readonly timeout: AppmeshRouteSpecHttp2RouteTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference">AppmeshRouteSpecHttp2RouteTimeoutOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: AppmeshRouteSpecHttp2RouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteAction">AppmeshRouteSpecHttp2RouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshRouteSpecHttp2RouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteMatch">AppmeshRouteSpecHttp2RouteMatch</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: AppmeshRouteSpecHttp2RouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: AppmeshRouteSpecHttp2RouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2Route;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---


### AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference <a name="AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout">putPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetHttpRetryEvents">resetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetTcpRetryEvents">resetTcpRetryEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPerRetryTimeout` <a name="putPerRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```typescript
public putPerRetryTimeout(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---

##### `resetHttpRetryEvents` <a name="resetHttpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```typescript
public resetHttpRetryEvents(): void
```

##### `resetTcpRetryEvents` <a name="resetTcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```typescript
public resetTcpRetryEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEventsInput">httpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeoutInput">perRetryTimeoutInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEvents">httpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```typescript
public readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `httpRetryEventsInput`<sup>Optional</sup> <a name="httpRetryEventsInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```typescript
public readonly httpRetryEventsInput: string[];
```

- *Type:* string[]

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `perRetryTimeoutInput`<sup>Optional</sup> <a name="perRetryTimeoutInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```typescript
public readonly perRetryTimeoutInput: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---

##### `tcpRetryEventsInput`<sup>Optional</sup> <a name="tcpRetryEventsInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```typescript
public readonly tcpRetryEventsInput: string[];
```

- *Type:* string[]

---

##### `httpRetryEvents`<sup>Required</sup> <a name="httpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```typescript
public readonly httpRetryEvents: string[];
```

- *Type:* string[]

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="tcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```typescript
public readonly tcpRetryEvents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicy">AppmeshRouteSpecHttp2RouteRetryPolicy</a>

---


### AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle">putIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest">putPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetIdle">resetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetPerRequest">resetPerRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdle` <a name="putIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle"></a>

```typescript
public putIdle(value: AppmeshRouteSpecHttp2RouteTimeoutIdle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---

##### `putPerRequest` <a name="putPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest"></a>

```typescript
public putPerRequest(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---

##### `resetIdle` <a name="resetIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetIdle"></a>

```typescript
public resetIdle(): void
```

##### `resetPerRequest` <a name="resetPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.resetPerRequest"></a>

```typescript
public resetPerRequest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference">AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idleInput">idleInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequestInput">perRequestInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idle"></a>

```typescript
public readonly idle: AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference">AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference</a>

---

##### `perRequest`<sup>Required</sup> <a name="perRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequest"></a>

```typescript
public readonly perRequest: AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference</a>

---

##### `idleInput`<sup>Optional</sup> <a name="idleInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.idleInput"></a>

```typescript
public readonly idleInput: AppmeshRouteSpecHttp2RouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutIdle">AppmeshRouteSpecHttp2RouteTimeoutIdle</a>

---

##### `perRequestInput`<sup>Optional</sup> <a name="perRequestInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.perRequestInput"></a>

```typescript
public readonly perRequestInput: AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeout">AppmeshRouteSpecHttp2RouteTimeout</a>

---


### AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteTimeoutPerRequest">AppmeshRouteSpecHttp2RouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecHttpRouteActionOutputReference <a name="AppmeshRouteSpecHttpRouteActionOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget">putWeightedTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeightedTarget` <a name="putWeightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget"></a>

```typescript
public putWeightedTarget(value: IResolvable | AppmeshRouteSpecHttpRouteActionWeightedTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTarget">weightedTarget</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList">AppmeshRouteSpecHttpRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTargetInput">weightedTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTarget"></a>

```typescript
public readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList">AppmeshRouteSpecHttpRouteActionWeightedTargetList</a>

---

##### `weightedTargetInput`<sup>Optional</sup> <a name="weightedTargetInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.weightedTargetInput"></a>

```typescript
public readonly weightedTargetInput: IResolvable | AppmeshRouteSpecHttpRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---


### AppmeshRouteSpecHttpRouteActionWeightedTargetList <a name="AppmeshRouteSpecHttpRouteActionWeightedTargetList" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get"></a>

```typescript
public get(index: number): AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecHttpRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>[]

---


### AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtualNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNode">virtualNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualNodeInput`<sup>Optional</sup> <a name="virtualNodeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```typescript
public readonly virtualNodeInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```typescript
public readonly virtualNode: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecHttpRouteActionWeightedTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionWeightedTarget">AppmeshRouteSpecHttpRouteActionWeightedTarget</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderList <a name="AppmeshRouteSpecHttpRouteMatchHeaderList" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get"></a>

```typescript
public get(index: number): AppmeshRouteSpecHttpRouteMatchHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecHttpRouteMatchHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>[]

---


### AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex">resetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange"></a>

```typescript
public putRange(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `resetExact` <a name="resetExact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetRange` <a name="resetRange" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.resetSuffix"></a>

```typescript
public resetSuffix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput">suffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix">suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.range"></a>

```typescript
public readonly range: AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference</a>

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffixInput"></a>

```typescript
public readonly suffixInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.suffix"></a>

```typescript
public readonly suffix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteMatchHeaderMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput">endInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput">startInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end">end</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start">start</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.endInput"></a>

```typescript
public readonly endInput: number;
```

- *Type:* number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.startInput"></a>

```typescript
public readonly startInput: number;
```

- *Type:* number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.end"></a>

```typescript
public readonly end: number;
```

- *Type:* number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.start"></a>

```typescript
public readonly start: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchRange">AppmeshRouteSpecHttpRouteMatchHeaderMatchRange</a>

---


### AppmeshRouteSpecHttpRouteMatchHeaderOutputReference <a name="AppmeshRouteSpecHttpRouteMatchHeaderOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert">resetInvert</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch">resetMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshRouteSpecHttpRouteMatchHeaderMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `resetInvert` <a name="resetInvert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetInvert"></a>

```typescript
public resetInvert(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput">invertInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invert">invert</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference">AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference</a>

---

##### `invertInput`<sup>Optional</sup> <a name="invertInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invertInput"></a>

```typescript
public readonly invertInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshRouteSpecHttpRouteMatchHeaderMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderMatch">AppmeshRouteSpecHttpRouteMatchHeaderMatch</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `invert`<sup>Required</sup> <a name="invert" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.invert"></a>

```typescript
public readonly invert: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecHttpRouteMatchHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>

---


### AppmeshRouteSpecHttpRouteMatchOutputReference <a name="AppmeshRouteSpecHttpRouteMatchOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | AppmeshRouteSpecHttpRouteMatchHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>[]

---

##### `resetHeader` <a name="resetHeader" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.header">header</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList">AppmeshRouteSpecHttpRouteMatchHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.header"></a>

```typescript
public readonly header: AppmeshRouteSpecHttpRouteMatchHeaderList;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeaderList">AppmeshRouteSpecHttpRouteMatchHeaderList</a>

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | AppmeshRouteSpecHttpRouteMatchHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchHeader">AppmeshRouteSpecHttpRouteMatchHeader</a>[]

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---


### AppmeshRouteSpecHttpRouteOutputReference <a name="AppmeshRouteSpecHttpRouteOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy">putRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetRetryPolicy">resetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction"></a>

```typescript
public putAction(value: AppmeshRouteSpecHttpRouteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---

##### `putMatch` <a name="putMatch" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch"></a>

```typescript
public putMatch(value: AppmeshRouteSpecHttpRouteMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---

##### `putRetryPolicy` <a name="putRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy"></a>

```typescript
public putRetryPolicy(value: AppmeshRouteSpecHttpRouteRetryPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout"></a>

```typescript
public putTimeout(value: AppmeshRouteSpecHttpRouteTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---

##### `resetRetryPolicy` <a name="resetRetryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetRetryPolicy"></a>

```typescript
public resetRetryPolicy(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference">AppmeshRouteSpecHttpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference">AppmeshRouteSpecHttpRouteMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference">AppmeshRouteSpecHttpRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicyInput">retryPolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.action"></a>

```typescript
public readonly action: AppmeshRouteSpecHttpRouteActionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteActionOutputReference">AppmeshRouteSpecHttpRouteActionOutputReference</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.match"></a>

```typescript
public readonly match: AppmeshRouteSpecHttpRouteMatchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatchOutputReference">AppmeshRouteSpecHttpRouteMatchOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: AppmeshRouteSpecHttpRouteRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeout"></a>

```typescript
public readonly timeout: AppmeshRouteSpecHttpRouteTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference">AppmeshRouteSpecHttpRouteTimeoutOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: AppmeshRouteSpecHttpRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteAction">AppmeshRouteSpecHttpRouteAction</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: AppmeshRouteSpecHttpRouteMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteMatch">AppmeshRouteSpecHttpRouteMatch</a>

---

##### `retryPolicyInput`<sup>Optional</sup> <a name="retryPolicyInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.retryPolicyInput"></a>

```typescript
public readonly retryPolicyInput: AppmeshRouteSpecHttpRouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: AppmeshRouteSpecHttpRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---


### AppmeshRouteSpecHttpRouteRetryPolicyOutputReference <a name="AppmeshRouteSpecHttpRouteRetryPolicyOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout">putPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetHttpRetryEvents">resetHttpRetryEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetTcpRetryEvents">resetTcpRetryEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPerRetryTimeout` <a name="putPerRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout"></a>

```typescript
public putPerRetryTimeout(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.putPerRetryTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---

##### `resetHttpRetryEvents` <a name="resetHttpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetHttpRetryEvents"></a>

```typescript
public resetHttpRetryEvents(): void
```

##### `resetTcpRetryEvents` <a name="resetTcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.resetTcpRetryEvents"></a>

```typescript
public resetTcpRetryEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeout">perRetryTimeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEventsInput">httpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeoutInput">perRetryTimeoutInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEventsInput">tcpRetryEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEvents">httpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEvents">tcpRetryEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `perRetryTimeout`<sup>Required</sup> <a name="perRetryTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeout"></a>

```typescript
public readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference</a>

---

##### `httpRetryEventsInput`<sup>Optional</sup> <a name="httpRetryEventsInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEventsInput"></a>

```typescript
public readonly httpRetryEventsInput: string[];
```

- *Type:* string[]

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `perRetryTimeoutInput`<sup>Optional</sup> <a name="perRetryTimeoutInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.perRetryTimeoutInput"></a>

```typescript
public readonly perRetryTimeoutInput: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---

##### `tcpRetryEventsInput`<sup>Optional</sup> <a name="tcpRetryEventsInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEventsInput"></a>

```typescript
public readonly tcpRetryEventsInput: string[];
```

- *Type:* string[]

---

##### `httpRetryEvents`<sup>Required</sup> <a name="httpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.httpRetryEvents"></a>

```typescript
public readonly httpRetryEvents: string[];
```

- *Type:* string[]

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `tcpRetryEvents`<sup>Required</sup> <a name="tcpRetryEvents" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.tcpRetryEvents"></a>

```typescript
public readonly tcpRetryEvents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteRetryPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicy">AppmeshRouteSpecHttpRouteRetryPolicy</a>

---


### AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference <a name="AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout">AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout</a>

---


### AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---


### AppmeshRouteSpecHttpRouteTimeoutOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle">putIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest">putPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetIdle">resetIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetPerRequest">resetPerRequest</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdle` <a name="putIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle"></a>

```typescript
public putIdle(value: AppmeshRouteSpecHttpRouteTimeoutIdle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---

##### `putPerRequest` <a name="putPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest"></a>

```typescript
public putPerRequest(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.putPerRequest.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---

##### `resetIdle` <a name="resetIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetIdle"></a>

```typescript
public resetIdle(): void
```

##### `resetPerRequest` <a name="resetPerRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.resetPerRequest"></a>

```typescript
public resetPerRequest(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference">AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequest">perRequest</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idleInput">idleInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequestInput">perRequestInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idle"></a>

```typescript
public readonly idle: AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference">AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference</a>

---

##### `perRequest`<sup>Required</sup> <a name="perRequest" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequest"></a>

```typescript
public readonly perRequest: AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference">AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference</a>

---

##### `idleInput`<sup>Optional</sup> <a name="idleInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.idleInput"></a>

```typescript
public readonly idleInput: AppmeshRouteSpecHttpRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutIdle">AppmeshRouteSpecHttpRouteTimeoutIdle</a>

---

##### `perRequestInput`<sup>Optional</sup> <a name="perRequestInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.perRequestInput"></a>

```typescript
public readonly perRequestInput: AppmeshRouteSpecHttpRouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeout">AppmeshRouteSpecHttpRouteTimeout</a>

---


### AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference <a name="AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecHttpRouteTimeoutPerRequest;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteTimeoutPerRequest">AppmeshRouteSpecHttpRouteTimeoutPerRequest</a>

---


### AppmeshRouteSpecOutputReference <a name="AppmeshRouteSpecOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute">putGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route">putHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute">putHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute">putTcpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetGrpcRoute">resetGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttp2Route">resetHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttpRoute">resetHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetTcpRoute">resetTcpRoute</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGrpcRoute` <a name="putGrpcRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute"></a>

```typescript
public putGrpcRoute(value: AppmeshRouteSpecGrpcRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putGrpcRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---

##### `putHttp2Route` <a name="putHttp2Route" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route"></a>

```typescript
public putHttp2Route(value: AppmeshRouteSpecHttp2Route): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putHttp2Route.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---

##### `putHttpRoute` <a name="putHttpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute"></a>

```typescript
public putHttpRoute(value: AppmeshRouteSpecHttpRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putHttpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---

##### `putTcpRoute` <a name="putTcpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute"></a>

```typescript
public putTcpRoute(value: AppmeshRouteSpecTcpRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.putTcpRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---

##### `resetGrpcRoute` <a name="resetGrpcRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetGrpcRoute"></a>

```typescript
public resetGrpcRoute(): void
```

##### `resetHttp2Route` <a name="resetHttp2Route" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttp2Route"></a>

```typescript
public resetHttp2Route(): void
```

##### `resetHttpRoute` <a name="resetHttpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetHttpRoute"></a>

```typescript
public resetHttpRoute(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetTcpRoute` <a name="resetTcpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.resetTcpRoute"></a>

```typescript
public resetTcpRoute(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRoute">grpcRoute</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference">AppmeshRouteSpecGrpcRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2Route">http2Route</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference">AppmeshRouteSpecHttp2RouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRoute">httpRoute</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference">AppmeshRouteSpecHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRoute">tcpRoute</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference">AppmeshRouteSpecTcpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRouteInput">grpcRouteInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2RouteInput">http2RouteInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRouteInput">httpRouteInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRouteInput">tcpRouteInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpcRoute`<sup>Required</sup> <a name="grpcRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRoute"></a>

```typescript
public readonly grpcRoute: AppmeshRouteSpecGrpcRouteOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRouteOutputReference">AppmeshRouteSpecGrpcRouteOutputReference</a>

---

##### `http2Route`<sup>Required</sup> <a name="http2Route" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2Route"></a>

```typescript
public readonly http2Route: AppmeshRouteSpecHttp2RouteOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2RouteOutputReference">AppmeshRouteSpecHttp2RouteOutputReference</a>

---

##### `httpRoute`<sup>Required</sup> <a name="httpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRoute"></a>

```typescript
public readonly httpRoute: AppmeshRouteSpecHttpRouteOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRouteOutputReference">AppmeshRouteSpecHttpRouteOutputReference</a>

---

##### `tcpRoute`<sup>Required</sup> <a name="tcpRoute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRoute"></a>

```typescript
public readonly tcpRoute: AppmeshRouteSpecTcpRouteOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference">AppmeshRouteSpecTcpRouteOutputReference</a>

---

##### `grpcRouteInput`<sup>Optional</sup> <a name="grpcRouteInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.grpcRouteInput"></a>

```typescript
public readonly grpcRouteInput: AppmeshRouteSpecGrpcRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecGrpcRoute">AppmeshRouteSpecGrpcRoute</a>

---

##### `http2RouteInput`<sup>Optional</sup> <a name="http2RouteInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.http2RouteInput"></a>

```typescript
public readonly http2RouteInput: AppmeshRouteSpecHttp2Route;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttp2Route">AppmeshRouteSpecHttp2Route</a>

---

##### `httpRouteInput`<sup>Optional</sup> <a name="httpRouteInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.httpRouteInput"></a>

```typescript
public readonly httpRouteInput: AppmeshRouteSpecHttpRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecHttpRoute">AppmeshRouteSpecHttpRoute</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `tcpRouteInput`<sup>Optional</sup> <a name="tcpRouteInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.tcpRouteInput"></a>

```typescript
public readonly tcpRouteInput: AppmeshRouteSpecTcpRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpec;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpec">AppmeshRouteSpec</a>

---


### AppmeshRouteSpecTcpRouteActionOutputReference <a name="AppmeshRouteSpecTcpRouteActionOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget">putWeightedTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeightedTarget` <a name="putWeightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget"></a>

```typescript
public putWeightedTarget(value: IResolvable | AppmeshRouteSpecTcpRouteActionWeightedTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.putWeightedTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTarget">weightedTarget</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList">AppmeshRouteSpecTcpRouteActionWeightedTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTargetInput">weightedTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `weightedTarget`<sup>Required</sup> <a name="weightedTarget" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTarget"></a>

```typescript
public readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList">AppmeshRouteSpecTcpRouteActionWeightedTargetList</a>

---

##### `weightedTargetInput`<sup>Optional</sup> <a name="weightedTargetInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.weightedTargetInput"></a>

```typescript
public readonly weightedTargetInput: IResolvable | AppmeshRouteSpecTcpRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecTcpRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---


### AppmeshRouteSpecTcpRouteActionWeightedTargetList <a name="AppmeshRouteSpecTcpRouteActionWeightedTargetList" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get"></a>

```typescript
public get(index: number): AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecTcpRouteActionWeightedTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>[]

---


### AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference <a name="AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNodeInput">virtualNodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNode">virtualNode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `virtualNodeInput`<sup>Optional</sup> <a name="virtualNodeInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNodeInput"></a>

```typescript
public readonly virtualNodeInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `virtualNode`<sup>Required</sup> <a name="virtualNode" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.virtualNode"></a>

```typescript
public readonly virtualNode: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppmeshRouteSpecTcpRouteActionWeightedTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionWeightedTarget">AppmeshRouteSpecTcpRouteActionWeightedTarget</a>

---


### AppmeshRouteSpecTcpRouteOutputReference <a name="AppmeshRouteSpecTcpRouteOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout">putTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction"></a>

```typescript
public putAction(value: AppmeshRouteSpecTcpRouteAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---

##### `putTimeout` <a name="putTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout"></a>

```typescript
public putTimeout(value: AppmeshRouteSpecTcpRouteTimeout): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.putTimeout.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference">AppmeshRouteSpecTcpRouteActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeout">timeout</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference">AppmeshRouteSpecTcpRouteTimeoutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeoutInput">timeoutInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.action"></a>

```typescript
public readonly action: AppmeshRouteSpecTcpRouteActionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteActionOutputReference">AppmeshRouteSpecTcpRouteActionOutputReference</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeout"></a>

```typescript
public readonly timeout: AppmeshRouteSpecTcpRouteTimeoutOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference">AppmeshRouteSpecTcpRouteTimeoutOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: AppmeshRouteSpecTcpRouteAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteAction">AppmeshRouteSpecTcpRouteAction</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: AppmeshRouteSpecTcpRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecTcpRoute;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRoute">AppmeshRouteSpecTcpRoute</a>

---


### AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference <a name="AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecTcpRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---


### AppmeshRouteSpecTcpRouteTimeoutOutputReference <a name="AppmeshRouteSpecTcpRouteTimeoutOutputReference" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer"></a>

```typescript
import { appmeshRoute } from '@cdktf/aws-cdk'

new appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle">putIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resetIdle">resetIdle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdle` <a name="putIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle"></a>

```typescript
public putIdle(value: AppmeshRouteSpecTcpRouteTimeoutIdle): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.putIdle.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---

##### `resetIdle` <a name="resetIdle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.resetIdle"></a>

```typescript
public resetIdle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idle">idle</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference">AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idleInput">idleInput</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idle`<sup>Required</sup> <a name="idle" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idle"></a>

```typescript
public readonly idle: AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference">AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference</a>

---

##### `idleInput`<sup>Optional</sup> <a name="idleInput" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.idleInput"></a>

```typescript
public readonly idleInput: AppmeshRouteSpecTcpRouteTimeoutIdle;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutIdle">AppmeshRouteSpecTcpRouteTimeoutIdle</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeoutOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppmeshRouteSpecTcpRouteTimeout;
```

- *Type:* <a href="#@cdktf/aws-cdk.appmeshRoute.AppmeshRouteSpecTcpRouteTimeout">AppmeshRouteSpecTcpRouteTimeout</a>

---



