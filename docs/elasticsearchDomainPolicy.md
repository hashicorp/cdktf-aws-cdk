# `aws_elasticsearch_domain_policy`

Refer to the Terraform Registory for docs: [`aws_elasticsearch_domain_policy`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy).

# `elasticsearchDomainPolicy` Submodule <a name="`elasticsearchDomainPolicy` Submodule" id="@cdktf/aws-cdk.elasticsearchDomainPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticsearchDomainPolicy <a name="ElasticsearchDomainPolicy" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy aws_elasticsearch_domain_policy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.Initializer"></a>

```typescript
import { elasticsearchDomainPolicy } from '@cdktf/aws-cdk'

new elasticsearchDomainPolicy.ElasticsearchDomainPolicy(scope: Construct, id: string, config: ElasticsearchDomainPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig">ElasticsearchDomainPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig">ElasticsearchDomainPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isConstruct"></a>

```typescript
import { elasticsearchDomainPolicy } from '@cdktf/aws-cdk'

elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isTerraformElement"></a>

```typescript
import { elasticsearchDomainPolicy } from '@cdktf/aws-cdk'

elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isTerraformResource"></a>

```typescript
import { elasticsearchDomainPolicy } from '@cdktf/aws-cdk'

elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.accessPoliciesInput">accessPoliciesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.accessPolicies">accessPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPoliciesInput`<sup>Optional</sup> <a name="accessPoliciesInput" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.accessPoliciesInput"></a>

```typescript
public readonly accessPoliciesInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchDomainPolicyConfig <a name="ElasticsearchDomainPolicyConfig" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.Initializer"></a>

```typescript
import { elasticsearchDomainPolicy } from '@cdktf/aws-cdk'

const elasticsearchDomainPolicyConfig: elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.accessPolicies">accessPolicies</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#access_policies ElasticsearchDomainPolicy#access_policies}. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#domain_name ElasticsearchDomainPolicy#domain_name}. |
| <code><a href="#@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#id ElasticsearchDomainPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#access_policies ElasticsearchDomainPolicy#access_policies}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#domain_name ElasticsearchDomainPolicy#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.elasticsearchDomainPolicy.ElasticsearchDomainPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elasticsearch_domain_policy#id ElasticsearchDomainPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



