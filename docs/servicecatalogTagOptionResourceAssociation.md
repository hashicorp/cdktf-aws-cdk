# `aws_servicecatalog_tag_option_resource_association`

Refer to the Terraform Registory for docs: [`aws_servicecatalog_tag_option_resource_association`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association).

# `servicecatalogTagOptionResourceAssociation` Submodule <a name="`servicecatalogTagOptionResourceAssociation` Submodule" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogTagOptionResourceAssociation <a name="ServicecatalogTagOptionResourceAssociation" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/aws-cdk'

new servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation(scope: Construct, id: string, config: ServicecatalogTagOptionResourceAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig">ServicecatalogTagOptionResourceAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig">ServicecatalogTagOptionResourceAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/aws-cdk'

servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/aws-cdk'

servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/aws-cdk'

servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceCreatedTime">resourceCreatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceDescription">resourceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionIdInput">tagOptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionId">tagOptionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `resourceCreatedTime`<sup>Required</sup> <a name="resourceCreatedTime" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceCreatedTime"></a>

```typescript
public readonly resourceCreatedTime: string;
```

- *Type:* string

---

##### `resourceDescription`<sup>Required</sup> <a name="resourceDescription" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceDescription"></a>

```typescript
public readonly resourceDescription: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `tagOptionIdInput`<sup>Optional</sup> <a name="tagOptionIdInput" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionIdInput"></a>

```typescript
public readonly tagOptionIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `tagOptionId`<sup>Required</sup> <a name="tagOptionId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tagOptionId"></a>

```typescript
public readonly tagOptionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogTagOptionResourceAssociationConfig <a name="ServicecatalogTagOptionResourceAssociationConfig" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.Initializer"></a>

```typescript
import { servicecatalogTagOptionResourceAssociation } from '@cdktf/aws-cdk'

const servicecatalogTagOptionResourceAssociationConfig: servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.tagOptionId">tagOptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}. |
| <code><a href="#@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}.

---

##### `tagOptionId`<sup>Required</sup> <a name="tagOptionId" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.tagOptionId"></a>

```typescript
public readonly tagOptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.servicecatalogTagOptionResourceAssociation.ServicecatalogTagOptionResourceAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



