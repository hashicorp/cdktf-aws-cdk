# `aws_appsync_domain_name_api_association`

Refer to the Terraform Registory for docs: [`aws_appsync_domain_name_api_association`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_domain_name_api_association).

# `appsyncDomainNameApiAssociation` Submodule <a name="`appsyncDomainNameApiAssociation` Submodule" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncDomainNameApiAssociation <a name="AppsyncDomainNameApiAssociation" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_domain_name_api_association aws_appsync_domain_name_api_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.Initializer"></a>

```typescript
import { appsyncDomainNameApiAssociation } from '@cdktf/aws-cdk'

new appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation(scope: Construct, id: string, config: AppsyncDomainNameApiAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig">AppsyncDomainNameApiAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig">AppsyncDomainNameApiAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isConstruct"></a>

```typescript
import { appsyncDomainNameApiAssociation } from '@cdktf/aws-cdk'

appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isTerraformElement"></a>

```typescript
import { appsyncDomainNameApiAssociation } from '@cdktf/aws-cdk'

appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isTerraformResource"></a>

```typescript
import { appsyncDomainNameApiAssociation } from '@cdktf/aws-cdk'

appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncDomainNameApiAssociationConfig <a name="AppsyncDomainNameApiAssociationConfig" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.Initializer"></a>

```typescript
import { appsyncDomainNameApiAssociation } from '@cdktf/aws-cdk'

const appsyncDomainNameApiAssociationConfig: appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_domain_name_api_association#api_id AppsyncDomainNameApiAssociation#api_id}. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_domain_name_api_association#domain_name AppsyncDomainNameApiAssociation#domain_name}. |
| <code><a href="#@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_domain_name_api_association#id AppsyncDomainNameApiAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_domain_name_api_association#api_id AppsyncDomainNameApiAssociation#api_id}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_domain_name_api_association#domain_name AppsyncDomainNameApiAssociation#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.appsyncDomainNameApiAssociation.AppsyncDomainNameApiAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_domain_name_api_association#id AppsyncDomainNameApiAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



