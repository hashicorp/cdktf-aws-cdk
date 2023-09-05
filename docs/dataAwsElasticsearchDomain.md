# `data_aws_elasticsearch_domain`

Refer to the Terraform Registory for docs: [`data_aws_elasticsearch_domain`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticsearch_domain).

# `dataAwsElasticsearchDomain` Submodule <a name="`dataAwsElasticsearchDomain` Submodule" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsElasticsearchDomain <a name="DataAwsElasticsearchDomain" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticsearch_domain aws_elasticsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomain(scope: Construct, id: string, config: DataAwsElasticsearchDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig">DataAwsElasticsearchDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig">DataAwsElasticsearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.accessPolicies">accessPolicies</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedOptions">advancedOptions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedSecurityOptions">advancedSecurityOptions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList">DataAwsElasticsearchDomainAdvancedSecurityOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.autoTuneOptions">autoTuneOptions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList">DataAwsElasticsearchDomainAutoTuneOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.clusterConfig">clusterConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList">DataAwsElasticsearchDomainClusterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cognitoOptions">cognitoOptions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList">DataAwsElasticsearchDomainCognitoOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.created">created</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.deleted">deleted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.ebsOptions">ebsOptions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList">DataAwsElasticsearchDomainEbsOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.elasticsearchVersion">elasticsearchVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList">DataAwsElasticsearchDomainEncryptionAtRestList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.kibanaEndpoint">kibanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.logPublishingOptions">logPublishingOptions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList">DataAwsElasticsearchDomainLogPublishingOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.nodeToNodeEncryption">nodeToNodeEncryption</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList">DataAwsElasticsearchDomainNodeToNodeEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.processing">processing</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.snapshotOptions">snapshotOptions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList">DataAwsElasticsearchDomainSnapshotOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.vpcOptions">vpcOptions</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList">DataAwsElasticsearchDomainVpcOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessPolicies`<sup>Required</sup> <a name="accessPolicies" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.accessPolicies"></a>

```typescript
public readonly accessPolicies: string;
```

- *Type:* string

---

##### `advancedOptions`<sup>Required</sup> <a name="advancedOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedOptions"></a>

```typescript
public readonly advancedOptions: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `advancedSecurityOptions`<sup>Required</sup> <a name="advancedSecurityOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.advancedSecurityOptions"></a>

```typescript
public readonly advancedSecurityOptions: DataAwsElasticsearchDomainAdvancedSecurityOptionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList">DataAwsElasticsearchDomainAdvancedSecurityOptionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoTuneOptions`<sup>Required</sup> <a name="autoTuneOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.autoTuneOptions"></a>

```typescript
public readonly autoTuneOptions: DataAwsElasticsearchDomainAutoTuneOptionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList">DataAwsElasticsearchDomainAutoTuneOptionsList</a>

---

##### `clusterConfig`<sup>Required</sup> <a name="clusterConfig" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.clusterConfig"></a>

```typescript
public readonly clusterConfig: DataAwsElasticsearchDomainClusterConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList">DataAwsElasticsearchDomainClusterConfigList</a>

---

##### `cognitoOptions`<sup>Required</sup> <a name="cognitoOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.cognitoOptions"></a>

```typescript
public readonly cognitoOptions: DataAwsElasticsearchDomainCognitoOptionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList">DataAwsElasticsearchDomainCognitoOptionsList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.created"></a>

```typescript
public readonly created: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.deleted"></a>

```typescript
public readonly deleted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `ebsOptions`<sup>Required</sup> <a name="ebsOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.ebsOptions"></a>

```typescript
public readonly ebsOptions: DataAwsElasticsearchDomainEbsOptionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList">DataAwsElasticsearchDomainEbsOptionsList</a>

---

##### `elasticsearchVersion`<sup>Required</sup> <a name="elasticsearchVersion" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.elasticsearchVersion"></a>

```typescript
public readonly elasticsearchVersion: string;
```

- *Type:* string

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.encryptionAtRest"></a>

```typescript
public readonly encryptionAtRest: DataAwsElasticsearchDomainEncryptionAtRestList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList">DataAwsElasticsearchDomainEncryptionAtRestList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `kibanaEndpoint`<sup>Required</sup> <a name="kibanaEndpoint" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.kibanaEndpoint"></a>

```typescript
public readonly kibanaEndpoint: string;
```

- *Type:* string

---

##### `logPublishingOptions`<sup>Required</sup> <a name="logPublishingOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.logPublishingOptions"></a>

```typescript
public readonly logPublishingOptions: DataAwsElasticsearchDomainLogPublishingOptionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList">DataAwsElasticsearchDomainLogPublishingOptionsList</a>

---

##### `nodeToNodeEncryption`<sup>Required</sup> <a name="nodeToNodeEncryption" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.nodeToNodeEncryption"></a>

```typescript
public readonly nodeToNodeEncryption: DataAwsElasticsearchDomainNodeToNodeEncryptionList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList">DataAwsElasticsearchDomainNodeToNodeEncryptionList</a>

---

##### `processing`<sup>Required</sup> <a name="processing" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.processing"></a>

```typescript
public readonly processing: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `snapshotOptions`<sup>Required</sup> <a name="snapshotOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.snapshotOptions"></a>

```typescript
public readonly snapshotOptions: DataAwsElasticsearchDomainSnapshotOptionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList">DataAwsElasticsearchDomainSnapshotOptionsList</a>

---

##### `vpcOptions`<sup>Required</sup> <a name="vpcOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.vpcOptions"></a>

```typescript
public readonly vpcOptions: DataAwsElasticsearchDomainVpcOptionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList">DataAwsElasticsearchDomainVpcOptionsList</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsElasticsearchDomainAdvancedSecurityOptions <a name="DataAwsElasticsearchDomainAdvancedSecurityOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainAdvancedSecurityOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions = { ... }
```


### DataAwsElasticsearchDomainAutoTuneOptions <a name="DataAwsElasticsearchDomainAutoTuneOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainAutoTuneOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions = { ... }
```


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule = { ... }
```


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration = { ... }
```


### DataAwsElasticsearchDomainClusterConfig <a name="DataAwsElasticsearchDomainClusterConfig" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainClusterConfig: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig = { ... }
```


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig = { ... }
```


### DataAwsElasticsearchDomainCognitoOptions <a name="DataAwsElasticsearchDomainCognitoOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainCognitoOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions = { ... }
```


### DataAwsElasticsearchDomainConfig <a name="DataAwsElasticsearchDomainConfig" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainConfig: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticsearch_domain#id DataAwsElasticsearchDomain#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticsearch_domain#domain_name DataAwsElasticsearchDomain#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticsearch_domain#id DataAwsElasticsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/elasticsearch_domain#tags DataAwsElasticsearchDomain#tags}.

---

### DataAwsElasticsearchDomainEbsOptions <a name="DataAwsElasticsearchDomainEbsOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainEbsOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions = { ... }
```


### DataAwsElasticsearchDomainEncryptionAtRest <a name="DataAwsElasticsearchDomainEncryptionAtRest" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainEncryptionAtRest: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest = { ... }
```


### DataAwsElasticsearchDomainLogPublishingOptions <a name="DataAwsElasticsearchDomainLogPublishingOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainLogPublishingOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions = { ... }
```


### DataAwsElasticsearchDomainNodeToNodeEncryption <a name="DataAwsElasticsearchDomainNodeToNodeEncryption" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainNodeToNodeEncryption: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption = { ... }
```


### DataAwsElasticsearchDomainSnapshotOptions <a name="DataAwsElasticsearchDomainSnapshotOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainSnapshotOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions = { ... }
```


### DataAwsElasticsearchDomainVpcOptions <a name="DataAwsElasticsearchDomainVpcOptions" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

const dataAwsElasticsearchDomainVpcOptions: dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsElasticsearchDomainAdvancedSecurityOptionsList <a name="DataAwsElasticsearchDomainAdvancedSecurityOptionsList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference <a name="DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled">internalUserDatabaseEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions">DataAwsElasticsearchDomainAdvancedSecurityOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalUserDatabaseEnabled`<sup>Required</sup> <a name="internalUserDatabaseEnabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalUserDatabaseEnabled"></a>

```typescript
public readonly internalUserDatabaseEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainAdvancedSecurityOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAdvancedSecurityOptions">DataAwsElasticsearchDomainAdvancedSecurityOptions</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsList <a name="DataAwsElasticsearchDomainAutoTuneOptionsList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence">cronExpressionForRecurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt">startAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cronExpressionForRecurrence`<sup>Required</sup> <a name="cronExpressionForRecurrence" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.cronExpressionForRecurrence"></a>

```typescript
public readonly cronExpressionForRecurrence: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.duration"></a>

```typescript
public readonly duration: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDurationList</a>

---

##### `startAt`<sup>Required</sup> <a name="startAt" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.startAt"></a>

```typescript
public readonly startAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule</a>

---


### DataAwsElasticsearchDomainAutoTuneOptionsOutputReference <a name="DataAwsElasticsearchDomainAutoTuneOptionsOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule">maintenanceSchedule</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable">rollbackOnDisable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions">DataAwsElasticsearchDomainAutoTuneOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `maintenanceSchedule`<sup>Required</sup> <a name="maintenanceSchedule" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.maintenanceSchedule"></a>

```typescript
public readonly maintenanceSchedule: DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList">DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleList</a>

---

##### `rollbackOnDisable`<sup>Required</sup> <a name="rollbackOnDisable" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.rollbackOnDisable"></a>

```typescript
public readonly rollbackOnDisable: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainAutoTuneOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainAutoTuneOptions">DataAwsElasticsearchDomainAutoTuneOptions</a>

---


### DataAwsElasticsearchDomainClusterConfigList <a name="DataAwsElasticsearchDomainClusterConfigList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainClusterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainClusterConfigOutputReference <a name="DataAwsElasticsearchDomainClusterConfigOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount">dedicatedMasterCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled">dedicatedMasterEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType">dedicatedMasterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceCount">instanceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmCount">warmCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmEnabled">warmEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmType">warmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig">zoneAwarenessConfig</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled">zoneAwarenessEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig">DataAwsElasticsearchDomainClusterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dedicatedMasterCount`<sup>Required</sup> <a name="dedicatedMasterCount" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterCount"></a>

```typescript
public readonly dedicatedMasterCount: number;
```

- *Type:* number

---

##### `dedicatedMasterEnabled`<sup>Required</sup> <a name="dedicatedMasterEnabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterEnabled"></a>

```typescript
public readonly dedicatedMasterEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dedicatedMasterType`<sup>Required</sup> <a name="dedicatedMasterType" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.dedicatedMasterType"></a>

```typescript
public readonly dedicatedMasterType: string;
```

- *Type:* string

---

##### `instanceCount`<sup>Required</sup> <a name="instanceCount" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceCount"></a>

```typescript
public readonly instanceCount: number;
```

- *Type:* number

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `warmCount`<sup>Required</sup> <a name="warmCount" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmCount"></a>

```typescript
public readonly warmCount: number;
```

- *Type:* number

---

##### `warmEnabled`<sup>Required</sup> <a name="warmEnabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmEnabled"></a>

```typescript
public readonly warmEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `warmType`<sup>Required</sup> <a name="warmType" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.warmType"></a>

```typescript
public readonly warmType: string;
```

- *Type:* string

---

##### `zoneAwarenessConfig`<sup>Required</sup> <a name="zoneAwarenessConfig" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessConfig"></a>

```typescript
public readonly zoneAwarenessConfig: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList</a>

---

##### `zoneAwarenessEnabled`<sup>Required</sup> <a name="zoneAwarenessEnabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.zoneAwarenessEnabled"></a>

```typescript
public readonly zoneAwarenessEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainClusterConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfig">DataAwsElasticsearchDomainClusterConfig</a>

---


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference <a name="DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneCount`<sup>Required</sup> <a name="availabilityZoneCount" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.availabilityZoneCount"></a>

```typescript
public readonly availabilityZoneCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig">DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig</a>

---


### DataAwsElasticsearchDomainCognitoOptionsList <a name="DataAwsElasticsearchDomainCognitoOptionsList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainCognitoOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainCognitoOptionsOutputReference <a name="DataAwsElasticsearchDomainCognitoOptionsOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions">DataAwsElasticsearchDomainCognitoOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainCognitoOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainCognitoOptions">DataAwsElasticsearchDomainCognitoOptions</a>

---


### DataAwsElasticsearchDomainEbsOptionsList <a name="DataAwsElasticsearchDomainEbsOptionsList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainEbsOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainEbsOptionsOutputReference <a name="DataAwsElasticsearchDomainEbsOptionsOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled">ebsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions">DataAwsElasticsearchDomainEbsOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsEnabled`<sup>Required</sup> <a name="ebsEnabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.ebsEnabled"></a>

```typescript
public readonly ebsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainEbsOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEbsOptions">DataAwsElasticsearchDomainEbsOptions</a>

---


### DataAwsElasticsearchDomainEncryptionAtRestList <a name="DataAwsElasticsearchDomainEncryptionAtRestList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainEncryptionAtRestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainEncryptionAtRestOutputReference <a name="DataAwsElasticsearchDomainEncryptionAtRestOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest">DataAwsElasticsearchDomainEncryptionAtRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainEncryptionAtRest;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainEncryptionAtRest">DataAwsElasticsearchDomainEncryptionAtRest</a>

---


### DataAwsElasticsearchDomainLogPublishingOptionsList <a name="DataAwsElasticsearchDomainLogPublishingOptionsList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainLogPublishingOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainLogPublishingOptionsOutputReference <a name="DataAwsElasticsearchDomainLogPublishingOptionsOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.logType">logType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions">DataAwsElasticsearchDomainLogPublishingOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.logType"></a>

```typescript
public readonly logType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainLogPublishingOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainLogPublishingOptions">DataAwsElasticsearchDomainLogPublishingOptions</a>

---


### DataAwsElasticsearchDomainNodeToNodeEncryptionList <a name="DataAwsElasticsearchDomainNodeToNodeEncryptionList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference <a name="DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption">DataAwsElasticsearchDomainNodeToNodeEncryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainNodeToNodeEncryption;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainNodeToNodeEncryption">DataAwsElasticsearchDomainNodeToNodeEncryption</a>

---


### DataAwsElasticsearchDomainSnapshotOptionsList <a name="DataAwsElasticsearchDomainSnapshotOptionsList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainSnapshotOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainSnapshotOptionsOutputReference <a name="DataAwsElasticsearchDomainSnapshotOptionsOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour">automatedSnapshotStartHour</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions">DataAwsElasticsearchDomainSnapshotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `automatedSnapshotStartHour`<sup>Required</sup> <a name="automatedSnapshotStartHour" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.automatedSnapshotStartHour"></a>

```typescript
public readonly automatedSnapshotStartHour: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainSnapshotOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainSnapshotOptions">DataAwsElasticsearchDomainSnapshotOptions</a>

---


### DataAwsElasticsearchDomainVpcOptionsList <a name="DataAwsElasticsearchDomainVpcOptionsList" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get"></a>

```typescript
public get(index: number): DataAwsElasticsearchDomainVpcOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsElasticsearchDomainVpcOptionsOutputReference <a name="DataAwsElasticsearchDomainVpcOptionsOutputReference" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsElasticsearchDomain } from '@cdktf/aws-cdk'

new dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions">DataAwsElasticsearchDomainVpcOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsElasticsearchDomainVpcOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsElasticsearchDomain.DataAwsElasticsearchDomainVpcOptions">DataAwsElasticsearchDomainVpcOptions</a>

---



