# `provider`

Refer to the Terraform Registory for docs: [`aws`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/aws-cdk.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsProvider <a name="AwsProvider" id="@cdktf/aws-cdk.provider.AwsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs aws}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.provider.AwsProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

new provider.AwsProvider(scope: Construct, id: string, config: AwsProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig">AwsProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.provider.AwsProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.provider.AwsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.provider.AwsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderConfig">AwsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetAllowedAccountIds">resetAllowedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetDefaultTags">resetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetForbiddenAccountIds">resetForbiddenAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetHttpProxy">resetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetIgnoreTags">resetIgnoreTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetS3ForcePathStyle">resetS3ForcePathStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetSharedCredentialsFile">resetSharedCredentialsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetSkipCredentialsValidation">resetSkipCredentialsValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetSkipGetEc2Platforms">resetSkipGetEc2Platforms</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetSkipMetadataApiCheck">resetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetSkipRegionValidation">resetSkipRegionValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetSkipRequestingAccountId">resetSkipRequestingAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.provider.AwsProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.provider.AwsProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.provider.AwsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.provider.AwsProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.provider.AwsProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.provider.AwsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.provider.AwsProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.provider.AwsProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.provider.AwsProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/aws-cdk.provider.AwsProvider.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/aws-cdk.provider.AwsProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAllowedAccountIds` <a name="resetAllowedAccountIds" id="@cdktf/aws-cdk.provider.AwsProvider.resetAllowedAccountIds"></a>

```typescript
public resetAllowedAccountIds(): void
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktf/aws-cdk.provider.AwsProvider.resetAssumeRole"></a>

```typescript
public resetAssumeRole(): void
```

##### `resetDefaultTags` <a name="resetDefaultTags" id="@cdktf/aws-cdk.provider.AwsProvider.resetDefaultTags"></a>

```typescript
public resetDefaultTags(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktf/aws-cdk.provider.AwsProvider.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetForbiddenAccountIds` <a name="resetForbiddenAccountIds" id="@cdktf/aws-cdk.provider.AwsProvider.resetForbiddenAccountIds"></a>

```typescript
public resetForbiddenAccountIds(): void
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktf/aws-cdk.provider.AwsProvider.resetHttpProxy"></a>

```typescript
public resetHttpProxy(): void
```

##### `resetIgnoreTags` <a name="resetIgnoreTags" id="@cdktf/aws-cdk.provider.AwsProvider.resetIgnoreTags"></a>

```typescript
public resetIgnoreTags(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/aws-cdk.provider.AwsProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/aws-cdk.provider.AwsProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/aws-cdk.provider.AwsProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetS3ForcePathStyle` <a name="resetS3ForcePathStyle" id="@cdktf/aws-cdk.provider.AwsProvider.resetS3ForcePathStyle"></a>

```typescript
public resetS3ForcePathStyle(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/aws-cdk.provider.AwsProvider.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetSharedCredentialsFile` <a name="resetSharedCredentialsFile" id="@cdktf/aws-cdk.provider.AwsProvider.resetSharedCredentialsFile"></a>

```typescript
public resetSharedCredentialsFile(): void
```

##### `resetSkipCredentialsValidation` <a name="resetSkipCredentialsValidation" id="@cdktf/aws-cdk.provider.AwsProvider.resetSkipCredentialsValidation"></a>

```typescript
public resetSkipCredentialsValidation(): void
```

##### `resetSkipGetEc2Platforms` <a name="resetSkipGetEc2Platforms" id="@cdktf/aws-cdk.provider.AwsProvider.resetSkipGetEc2Platforms"></a>

```typescript
public resetSkipGetEc2Platforms(): void
```

##### `resetSkipMetadataApiCheck` <a name="resetSkipMetadataApiCheck" id="@cdktf/aws-cdk.provider.AwsProvider.resetSkipMetadataApiCheck"></a>

```typescript
public resetSkipMetadataApiCheck(): void
```

##### `resetSkipRegionValidation` <a name="resetSkipRegionValidation" id="@cdktf/aws-cdk.provider.AwsProvider.resetSkipRegionValidation"></a>

```typescript
public resetSkipRegionValidation(): void
```

##### `resetSkipRequestingAccountId` <a name="resetSkipRequestingAccountId" id="@cdktf/aws-cdk.provider.AwsProvider.resetSkipRequestingAccountId"></a>

```typescript
public resetSkipRequestingAccountId(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/aws-cdk.provider.AwsProvider.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AwsProvider resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.provider.AwsProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

provider.AwsProvider.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.provider.AwsProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.provider.AwsProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

provider.AwsProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.provider.AwsProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/aws-cdk.provider.AwsProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

provider.AwsProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.provider.AwsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.provider.AwsProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

provider.AwsProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AwsProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.provider.AwsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.provider.AwsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AwsProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.provider.AwsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AwsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.provider.AwsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AwsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.allowedAccountIdsInput">allowedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.defaultTagsInput">defaultTagsInput</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.endpointsInput">endpointsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.forbiddenAccountIdsInput">forbiddenAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.ignoreTagsInput">ignoreTagsInput</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.s3ForcePathStyleInput">s3ForcePathStyleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.sharedCredentialsFileInput">sharedCredentialsFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipCredentialsValidationInput">skipCredentialsValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipGetEc2PlatformsInput">skipGetEc2PlatformsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipMetadataApiCheckInput">skipMetadataApiCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipRegionValidationInput">skipRegionValidationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipRequestingAccountIdInput">skipRequestingAccountIdInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.allowedAccountIds">allowedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.forbiddenAccountIds">forbiddenAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.httpProxy">httpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.ignoreTags">ignoreTags</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.s3ForcePathStyle">s3ForcePathStyle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.sharedCredentialsFile">sharedCredentialsFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipGetEc2Platforms">skipGetEc2Platforms</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipRegionValidation">skipRegionValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.skipRequestingAccountId">skipRequestingAccountId</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.provider.AwsProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.provider.AwsProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.provider.AwsProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.provider.AwsProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/aws-cdk.provider.AwsProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.provider.AwsProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.provider.AwsProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/aws-cdk.provider.AwsProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/aws-cdk.provider.AwsProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `allowedAccountIdsInput`<sup>Optional</sup> <a name="allowedAccountIdsInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.allowedAccountIdsInput"></a>

```typescript
public readonly allowedAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: AwsProviderAssumeRole;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>

---

##### `defaultTagsInput`<sup>Optional</sup> <a name="defaultTagsInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.defaultTagsInput"></a>

```typescript
public readonly defaultTagsInput: AwsProviderDefaultTags;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | AwsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]

---

##### `forbiddenAccountIdsInput`<sup>Optional</sup> <a name="forbiddenAccountIdsInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.forbiddenAccountIdsInput"></a>

```typescript
public readonly forbiddenAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.httpProxyInput"></a>

```typescript
public readonly httpProxyInput: string;
```

- *Type:* string

---

##### `ignoreTagsInput`<sup>Optional</sup> <a name="ignoreTagsInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.ignoreTagsInput"></a>

```typescript
public readonly ignoreTagsInput: AwsProviderIgnoreTags;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `s3ForcePathStyleInput`<sup>Optional</sup> <a name="s3ForcePathStyleInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.s3ForcePathStyleInput"></a>

```typescript
public readonly s3ForcePathStyleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `sharedCredentialsFileInput`<sup>Optional</sup> <a name="sharedCredentialsFileInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.sharedCredentialsFileInput"></a>

```typescript
public readonly sharedCredentialsFileInput: string;
```

- *Type:* string

---

##### `skipCredentialsValidationInput`<sup>Optional</sup> <a name="skipCredentialsValidationInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipCredentialsValidationInput"></a>

```typescript
public readonly skipCredentialsValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipGetEc2PlatformsInput`<sup>Optional</sup> <a name="skipGetEc2PlatformsInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipGetEc2PlatformsInput"></a>

```typescript
public readonly skipGetEc2PlatformsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipMetadataApiCheckInput`<sup>Optional</sup> <a name="skipMetadataApiCheckInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipMetadataApiCheckInput"></a>

```typescript
public readonly skipMetadataApiCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipRegionValidationInput`<sup>Optional</sup> <a name="skipRegionValidationInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipRegionValidationInput"></a>

```typescript
public readonly skipRegionValidationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipRequestingAccountIdInput`<sup>Optional</sup> <a name="skipRequestingAccountIdInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipRequestingAccountIdInput"></a>

```typescript
public readonly skipRequestingAccountIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/aws-cdk.provider.AwsProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/aws-cdk.provider.AwsProvider.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktf/aws-cdk.provider.AwsProvider.property.allowedAccountIds"></a>

```typescript
public readonly allowedAccountIds: string[];
```

- *Type:* string[]

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/aws-cdk.provider.AwsProvider.property.assumeRole"></a>

```typescript
public readonly assumeRole: AwsProviderAssumeRole;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/aws-cdk.provider.AwsProvider.property.defaultTags"></a>

```typescript
public readonly defaultTags: AwsProviderDefaultTags;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/aws-cdk.provider.AwsProvider.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | AwsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]

---

##### `forbiddenAccountIds`<sup>Optional</sup> <a name="forbiddenAccountIds" id="@cdktf/aws-cdk.provider.AwsProvider.property.forbiddenAccountIds"></a>

```typescript
public readonly forbiddenAccountIds: string[];
```

- *Type:* string[]

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/aws-cdk.provider.AwsProvider.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

---

##### `ignoreTags`<sup>Optional</sup> <a name="ignoreTags" id="@cdktf/aws-cdk.provider.AwsProvider.property.ignoreTags"></a>

```typescript
public readonly ignoreTags: AwsProviderIgnoreTags;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/aws-cdk.provider.AwsProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/aws-cdk.provider.AwsProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/aws-cdk.provider.AwsProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/aws-cdk.provider.AwsProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `s3ForcePathStyle`<sup>Optional</sup> <a name="s3ForcePathStyle" id="@cdktf/aws-cdk.provider.AwsProvider.property.s3ForcePathStyle"></a>

```typescript
public readonly s3ForcePathStyle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/aws-cdk.provider.AwsProvider.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `sharedCredentialsFile`<sup>Optional</sup> <a name="sharedCredentialsFile" id="@cdktf/aws-cdk.provider.AwsProvider.property.sharedCredentialsFile"></a>

```typescript
public readonly sharedCredentialsFile: string;
```

- *Type:* string

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipCredentialsValidation"></a>

```typescript
public readonly skipCredentialsValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipGetEc2Platforms`<sup>Optional</sup> <a name="skipGetEc2Platforms" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipGetEc2Platforms"></a>

```typescript
public readonly skipGetEc2Platforms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipRegionValidation`<sup>Optional</sup> <a name="skipRegionValidation" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipRegionValidation"></a>

```typescript
public readonly skipRegionValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `skipRequestingAccountId`<sup>Optional</sup> <a name="skipRequestingAccountId" id="@cdktf/aws-cdk.provider.AwsProvider.property.skipRequestingAccountId"></a>

```typescript
public readonly skipRequestingAccountId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/aws-cdk.provider.AwsProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.provider.AwsProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsProviderAssumeRole <a name="AwsProviderAssumeRole" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.Initializer"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

const awsProviderAssumeRole: provider.AwsProviderAssumeRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | The duration, in seconds, of the role session. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.externalId">externalId</a></code> | <code>string</code> | A unique identifier that might be required when you assume a role in another account. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.policy">policy</a></code> | <code>string</code> | IAM Policy JSON describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>string[]</code> | Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>string</code> | Amazon Resource Name of an IAM Role to assume prior to making API calls. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>string</code> | An identifier for the assumed role session. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Assume role session tags. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>string[]</code> | Assume role session tag keys to pass to any subsequent sessions. |

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

The duration, in seconds, of the role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#duration_seconds AwsProvider#duration_seconds}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

A unique identifier that might be required when you assume a role in another account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#external_id AwsProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#policy AwsProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#policy_arns AwsProvider#policy_arns}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Amazon Resource Name of an IAM Role to assume prior to making API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#role_arn AwsProvider#role_arn}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

An identifier for the assumed role session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#session_name AwsProvider#session_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#tags AwsProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktf/aws-cdk.provider.AwsProviderAssumeRole.property.transitiveTagKeys"></a>

```typescript
public readonly transitiveTagKeys: string[];
```

- *Type:* string[]

Assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transitive_tag_keys AwsProvider#transitive_tag_keys}

---

### AwsProviderConfig <a name="AwsProviderConfig" id="@cdktf/aws-cdk.provider.AwsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.provider.AwsProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

const awsProviderConfig: provider.AwsProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.region">region</a></code> | <code>string</code> | The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.accessKey">accessKey</a></code> | <code>string</code> | The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.allowedAccountIds">allowedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#allowed_account_ids AwsProvider#allowed_account_ids}. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a></code> | assume_role block. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.defaultTags">defaultTags</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a></code> | default_tags block. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.endpoints">endpoints</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.forbiddenAccountIds">forbiddenAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forbidden_account_ids AwsProvider#forbidden_account_ids}. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.httpProxy">httpProxy</a></code> | <code>string</code> | The address of an HTTP proxy to use when accessing the AWS API. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.ignoreTags">ignoreTags</a></code> | <code><a href="#@cdktf/aws-cdk.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a></code> | ignore_tags block. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of times an AWS API request is being executed. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.profile">profile</a></code> | <code>string</code> | The profile for API operations. If not set, the default profile created with `aws configure` will be used. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.s3ForcePathStyle">s3ForcePathStyle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set this to true to force the request to use path-style addressing, i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.secretKey">secretKey</a></code> | <code>string</code> | The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.sharedCredentialsFile">sharedCredentialsFile</a></code> | <code>string</code> | The path to the shared credentials file. If not set this defaults to ~/.aws/credentials. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipCredentialsValidation">skipCredentialsValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipGetEc2Platforms">skipGetEc2Platforms</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_metadata_api_check AwsProvider#skip_metadata_api_check}. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipRegionValidation">skipRegionValidation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip static validation of region name. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipRequestingAccountId">skipRequestingAccountId</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderConfig.property.token">token</a></code> | <code>string</code> | session token. A session token is only required if you are using temporary security credentials. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region where AWS operations will take place. Examples are us-east-1, us-west-2, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#region AwsProvider#region}

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

The access key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#access_key AwsProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#alias AwsProvider#alias}

---

##### `allowedAccountIds`<sup>Optional</sup> <a name="allowedAccountIds" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.allowedAccountIds"></a>

```typescript
public readonly allowedAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#allowed_account_ids AwsProvider#allowed_account_ids}.

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.assumeRole"></a>

```typescript
public readonly assumeRole: AwsProviderAssumeRole;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderAssumeRole">AwsProviderAssumeRole</a>

assume_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#assume_role AwsProvider#assume_role}

---

##### `defaultTags`<sup>Optional</sup> <a name="defaultTags" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.defaultTags"></a>

```typescript
public readonly defaultTags: AwsProviderDefaultTags;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderDefaultTags">AwsProviderDefaultTags</a>

default_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#default_tags AwsProvider#default_tags}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | AwsProviderEndpoints[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints">AwsProviderEndpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#endpoints AwsProvider#endpoints}

---

##### `forbiddenAccountIds`<sup>Optional</sup> <a name="forbiddenAccountIds" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.forbiddenAccountIds"></a>

```typescript
public readonly forbiddenAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forbidden_account_ids AwsProvider#forbidden_account_ids}.

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

The address of an HTTP proxy to use when accessing the AWS API.

Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#http_proxy AwsProvider#http_proxy}

---

##### `ignoreTags`<sup>Optional</sup> <a name="ignoreTags" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.ignoreTags"></a>

```typescript
public readonly ignoreTags: AwsProviderIgnoreTags;
```

- *Type:* <a href="#@cdktf/aws-cdk.provider.AwsProviderIgnoreTags">AwsProviderIgnoreTags</a>

ignore_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ignore_tags AwsProvider#ignore_tags}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#insecure AwsProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of times an AWS API request is being executed.

If the API request still fails, an error is
thrown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#max_retries AwsProvider#max_retries}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The profile for API operations. If not set, the default profile created with `aws configure` will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#profile AwsProvider#profile}

---

##### `s3ForcePathStyle`<sup>Optional</sup> <a name="s3ForcePathStyle" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.s3ForcePathStyle"></a>

```typescript
public readonly s3ForcePathStyle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set this to true to force the request to use path-style addressing, i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will use virtual hosted bucket addressing when possible (http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3_force_path_style AwsProvider#s3_force_path_style}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

The secret key for API operations. You can retrieve this from the 'Security & Credentials' section of the AWS console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#secret_key AwsProvider#secret_key}

---

##### `sharedCredentialsFile`<sup>Optional</sup> <a name="sharedCredentialsFile" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.sharedCredentialsFile"></a>

```typescript
public readonly sharedCredentialsFile: string;
```

- *Type:* string

The path to the shared credentials file. If not set this defaults to ~/.aws/credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#shared_credentials_file AwsProvider#shared_credentials_file}

---

##### `skipCredentialsValidation`<sup>Optional</sup> <a name="skipCredentialsValidation" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipCredentialsValidation"></a>

```typescript
public readonly skipCredentialsValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_credentials_validation AwsProvider#skip_credentials_validation}

---

##### `skipGetEc2Platforms`<sup>Optional</sup> <a name="skipGetEc2Platforms" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipGetEc2Platforms"></a>

```typescript
public readonly skipGetEc2Platforms: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_metadata_api_check AwsProvider#skip_metadata_api_check}.

---

##### `skipRegionValidation`<sup>Optional</sup> <a name="skipRegionValidation" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipRegionValidation"></a>

```typescript
public readonly skipRegionValidation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip static validation of region name.

Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_region_validation AwsProvider#skip_region_validation}

---

##### `skipRequestingAccountId`<sup>Optional</sup> <a name="skipRequestingAccountId" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.skipRequestingAccountId"></a>

```typescript
public readonly skipRequestingAccountId: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_requesting_account_id AwsProvider#skip_requesting_account_id}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/aws-cdk.provider.AwsProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

session token. A session token is only required if you are using temporary security credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#token AwsProvider#token}

---

### AwsProviderDefaultTags <a name="AwsProviderDefaultTags" id="@cdktf/aws-cdk.provider.AwsProviderDefaultTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.provider.AwsProviderDefaultTags.Initializer"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

const awsProviderDefaultTags: provider.AwsProviderDefaultTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderDefaultTags.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Resource tags to default across all resources. |

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.provider.AwsProviderDefaultTags.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource tags to default across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#tags AwsProvider#tags}

---

### AwsProviderEndpoints <a name="AwsProviderEndpoints" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.Initializer"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

const awsProviderEndpoints: provider.AwsProviderEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.accessanalyzer">accessanalyzer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.account">account</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.acm">acm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.acmpca">acmpca</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.alexaforbusiness">alexaforbusiness</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.amp">amp</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.amplify">amplify</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.amplifybackend">amplifybackend</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.apigateway">apigateway</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.apigatewayv2">apigatewayv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appautoscaling">appautoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appconfig">appconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appflow">appflow</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appintegrations">appintegrations</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appintegrationsservice">appintegrationsservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationautoscaling">applicationautoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationcostprofiler">applicationcostprofiler</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationdiscovery">applicationdiscovery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationdiscoveryservice">applicationdiscoveryservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationinsights">applicationinsights</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appmesh">appmesh</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appregistry">appregistry</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.apprunner">apprunner</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appstream">appstream</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appsync">appsync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.athena">athena</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.auditmanager">auditmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.augmentedairuntime">augmentedairuntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.autoscaling">autoscaling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.autoscalingplans">autoscalingplans</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.backup">backup</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.batch">batch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.braket">braket</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.budgets">budgets</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.chime">chime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloud9">cloud9</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudcontrol">cloudcontrol</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudcontrolapi">cloudcontrolapi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.clouddirectory">clouddirectory</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudformation">cloudformation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudfront">cloudfront</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudhsm">cloudhsm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudhsmv2">cloudhsmv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudsearch">cloudsearch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudsearchdomain">cloudsearchdomain</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudtrail">cloudtrail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudwatch">cloudwatch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudwatchevents">cloudwatchevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudwatchlogs">cloudwatchlogs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codeartifact">codeartifact</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codebuild">codebuild</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codecommit">codecommit</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codedeploy">codedeploy</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codeguruprofiler">codeguruprofiler</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codegurureviewer">codegurureviewer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codepipeline">codepipeline</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codestar">codestar</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codestarconnections">codestarconnections</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codestarnotifications">codestarnotifications</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cognitoidentity">cognitoidentity</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cognitoidentityprovider">cognitoidentityprovider</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cognitoidp">cognitoidp</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cognitosync">cognitosync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.comprehend">comprehend</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.comprehendmedical">comprehendmedical</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.config">config</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.configservice">configservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.connect">connect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.connectcontactlens">connectcontactlens</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.connectparticipant">connectparticipant</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.costandusagereportservice">costandusagereportservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.costexplorer">costexplorer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cur">cur</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.databasemigration">databasemigration</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.databasemigrationservice">databasemigrationservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dataexchange">dataexchange</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.datapipeline">datapipeline</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.datasync">datasync</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dax">dax</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.detective">detective</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.devicefarm">devicefarm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.devopsguru">devopsguru</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.directconnect">directconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dlm">dlm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dms">dms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.docdb">docdb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ds">ds</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dynamodb">dynamodb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dynamodbstreams">dynamodbstreams</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ec2">ec2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ec2Instanceconnect">ec2Instanceconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ecr">ecr</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ecrpublic">ecrpublic</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ecs">ecs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.efs">efs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.eks">eks</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticache">elasticache</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticbeanstalk">elasticbeanstalk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticinference">elasticinference</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticsearch">elasticsearch</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticsearchservice">elasticsearchservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elastictranscoder">elastictranscoder</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elb">elb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elbv2">elbv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.emr">emr</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.emrcontainers">emrcontainers</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.es">es</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.eventbridge">eventbridge</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.events">events</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.finspace">finspace</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.finspacedata">finspacedata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.firehose">firehose</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.fis">fis</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.fms">fms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.forecast">forecast</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.forecastquery">forecastquery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.forecastqueryservice">forecastqueryservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.forecastservice">forecastservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.frauddetector">frauddetector</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.fsx">fsx</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.gamelift">gamelift</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.glacier">glacier</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.globalaccelerator">globalaccelerator</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.glue">glue</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.gluedatabrew">gluedatabrew</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.greengrass">greengrass</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.greengrassv2">greengrassv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.groundstation">groundstation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.guardduty">guardduty</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.health">health</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.healthlake">healthlake</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.honeycode">honeycode</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iam">iam</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.identitystore">identitystore</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.imagebuilder">imagebuilder</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.inspector">inspector</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iot">iot</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iot1Clickdevices">iot1Clickdevices</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice">iot1Clickdevicesservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iot1Clickprojects">iot1Clickprojects</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotanalytics">iotanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotdataplane">iotdataplane</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotdeviceadvisor">iotdeviceadvisor</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotevents">iotevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ioteventsdata">ioteventsdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotfleethub">iotfleethub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotjobsdataplane">iotjobsdataplane</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotsecuretunneling">iotsecuretunneling</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotsitewise">iotsitewise</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotthingsgraph">iotthingsgraph</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotwireless">iotwireless</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kafka">kafka</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kafkaconnect">kafkaconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kendra">kendra</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesis">kinesis</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisanalytics">kinesisanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisanalyticsv2">kinesisanalyticsv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisvideo">kinesisvideo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia">kinesisvideoarchivedmedia</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisvideomedia">kinesisvideomedia</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels">kinesisvideosignalingchannels</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kms">kms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lakeformation">lakeformation</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lambda">lambda</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexmodelbuilding">lexmodelbuilding</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexmodelbuildingservice">lexmodelbuildingservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexmodels">lexmodels</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexmodelsv2">lexmodelsv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexruntime">lexruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexruntimeservice">lexruntimeservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexruntimev2">lexruntimev2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.licensemanager">licensemanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lightsail">lightsail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.location">location</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lookoutequipment">lookoutequipment</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lookoutforvision">lookoutforvision</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lookoutmetrics">lookoutmetrics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.machinelearning">machinelearning</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.macie">macie</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.macie2">macie2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.managedblockchain">managedblockchain</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplacecatalog">marketplacecatalog</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics">marketplacecommerceanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplaceentitlement">marketplaceentitlement</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplaceentitlementservice">marketplaceentitlementservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplacemetering">marketplacemetering</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediaconnect">mediaconnect</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediaconvert">mediaconvert</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.medialive">medialive</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediapackage">mediapackage</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediapackagevod">mediapackagevod</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediastore">mediastore</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediastoredata">mediastoredata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediatailor">mediatailor</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.memorydb">memorydb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mgn">mgn</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.migrationhub">migrationhub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.migrationhubconfig">migrationhubconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mobile">mobile</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mobileanalytics">mobileanalytics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mq">mq</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mturk">mturk</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mwaa">mwaa</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.neptune">neptune</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.networkfirewall">networkfirewall</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.networkmanager">networkmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.nimblestudio">nimblestudio</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.opsworks">opsworks</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.opsworkscm">opsworkscm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.organizations">organizations</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.outposts">outposts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.personalize">personalize</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.personalizeevents">personalizeevents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.personalizeruntime">personalizeruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pi">pi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pinpoint">pinpoint</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pinpointemail">pinpointemail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pinpointsmsvoice">pinpointsmsvoice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.polly">polly</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pricing">pricing</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.prometheus">prometheus</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.prometheusservice">prometheusservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.proton">proton</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.qldb">qldb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.qldbsession">qldbsession</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.quicksight">quicksight</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ram">ram</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.rds">rds</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.rdsdata">rdsdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.rdsdataservice">rdsdataservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.redshift">redshift</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.redshiftdata">redshiftdata</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.rekognition">rekognition</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.resourcegroups">resourcegroups</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.resourcegroupstagging">resourcegroupstagging</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi">resourcegroupstaggingapi</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.robomaker">robomaker</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53">route53</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53Domains">route53Domains</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig">route53Recoverycontrolconfig</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53Recoveryreadiness">route53Recoveryreadiness</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53Resolver">route53Resolver</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.s3">s3</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.s3Control">s3Control</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.s3Outposts">s3Outposts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sagemaker">sagemaker</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sagemakeredgemanager">sagemakeredgemanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime">sagemakerfeaturestoreruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sagemakerruntime">sagemakerruntime</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.savingsplans">savingsplans</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.schemas">schemas</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sdb">sdb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.secretsmanager">secretsmanager</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.securityhub">securityhub</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.serverlessapplicationrepository">serverlessapplicationrepository</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.serverlessapprepo">serverlessapprepo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.serverlessrepo">serverlessrepo</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.servicecatalog">servicecatalog</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.servicediscovery">servicediscovery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.servicequotas">servicequotas</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ses">ses</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sesv2">sesv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sfn">sfn</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.shield">shield</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.signer">signer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.simpledb">simpledb</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sms">sms</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.snowball">snowball</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sns">sns</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sqs">sqs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssm">ssm</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssmcontacts">ssmcontacts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssmincidents">ssmincidents</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sso">sso</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssoadmin">ssoadmin</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssooidc">ssooidc</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.stepfunctions">stepfunctions</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.storagegateway">storagegateway</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sts">sts</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.support">support</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.swf">swf</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.synthetics">synthetics</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.textract">textract</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.timestreamquery">timestreamquery</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.timestreamwrite">timestreamwrite</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transcribe">transcribe</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transcribeservice">transcribeservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transcribestreaming">transcribestreaming</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transcribestreamingservice">transcribestreamingservice</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transfer">transfer</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.translate">translate</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.waf">waf</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.wafregional">wafregional</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.wafv2">wafv2</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.wellarchitected">wellarchitected</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.workdocs">workdocs</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.worklink">worklink</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.workmail">workmail</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.workmailmessageflow">workmailmessageflow</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.workspaces">workspaces</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.xray">xray</a></code> | <code>string</code> | Use this to override the default service endpoint URL. |

---

##### `accessanalyzer`<sup>Optional</sup> <a name="accessanalyzer" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.accessanalyzer"></a>

```typescript
public readonly accessanalyzer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#accessanalyzer AwsProvider#accessanalyzer}

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#account AwsProvider#account}

---

##### `acm`<sup>Optional</sup> <a name="acm" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.acm"></a>

```typescript
public readonly acm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#acm AwsProvider#acm}

---

##### `acmpca`<sup>Optional</sup> <a name="acmpca" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.acmpca"></a>

```typescript
public readonly acmpca: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#acmpca AwsProvider#acmpca}

---

##### `alexaforbusiness`<sup>Optional</sup> <a name="alexaforbusiness" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.alexaforbusiness"></a>

```typescript
public readonly alexaforbusiness: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#alexaforbusiness AwsProvider#alexaforbusiness}

---

##### `amp`<sup>Optional</sup> <a name="amp" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.amp"></a>

```typescript
public readonly amp: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amp AwsProvider#amp}

---

##### `amplify`<sup>Optional</sup> <a name="amplify" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.amplify"></a>

```typescript
public readonly amplify: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amplify AwsProvider#amplify}

---

##### `amplifybackend`<sup>Optional</sup> <a name="amplifybackend" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.amplifybackend"></a>

```typescript
public readonly amplifybackend: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amplifybackend AwsProvider#amplifybackend}

---

##### `apigateway`<sup>Optional</sup> <a name="apigateway" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.apigateway"></a>

```typescript
public readonly apigateway: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apigateway AwsProvider#apigateway}

---

##### `apigatewayv2`<sup>Optional</sup> <a name="apigatewayv2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.apigatewayv2"></a>

```typescript
public readonly apigatewayv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apigatewayv2 AwsProvider#apigatewayv2}

---

##### `appautoscaling`<sup>Optional</sup> <a name="appautoscaling" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appautoscaling"></a>

```typescript
public readonly appautoscaling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appautoscaling AwsProvider#appautoscaling}

---

##### `appconfig`<sup>Optional</sup> <a name="appconfig" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appconfig"></a>

```typescript
public readonly appconfig: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appconfig AwsProvider#appconfig}

---

##### `appflow`<sup>Optional</sup> <a name="appflow" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appflow"></a>

```typescript
public readonly appflow: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appflow AwsProvider#appflow}

---

##### `appintegrations`<sup>Optional</sup> <a name="appintegrations" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appintegrations"></a>

```typescript
public readonly appintegrations: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appintegrations AwsProvider#appintegrations}

---

##### `appintegrationsservice`<sup>Optional</sup> <a name="appintegrationsservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appintegrationsservice"></a>

```typescript
public readonly appintegrationsservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appintegrationsservice AwsProvider#appintegrationsservice}

---

##### `applicationautoscaling`<sup>Optional</sup> <a name="applicationautoscaling" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationautoscaling"></a>

```typescript
public readonly applicationautoscaling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationautoscaling AwsProvider#applicationautoscaling}

---

##### `applicationcostprofiler`<sup>Optional</sup> <a name="applicationcostprofiler" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationcostprofiler"></a>

```typescript
public readonly applicationcostprofiler: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationcostprofiler AwsProvider#applicationcostprofiler}

---

##### `applicationdiscovery`<sup>Optional</sup> <a name="applicationdiscovery" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationdiscovery"></a>

```typescript
public readonly applicationdiscovery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationdiscovery AwsProvider#applicationdiscovery}

---

##### `applicationdiscoveryservice`<sup>Optional</sup> <a name="applicationdiscoveryservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationdiscoveryservice"></a>

```typescript
public readonly applicationdiscoveryservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationdiscoveryservice AwsProvider#applicationdiscoveryservice}

---

##### `applicationinsights`<sup>Optional</sup> <a name="applicationinsights" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.applicationinsights"></a>

```typescript
public readonly applicationinsights: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationinsights AwsProvider#applicationinsights}

---

##### `appmesh`<sup>Optional</sup> <a name="appmesh" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appmesh"></a>

```typescript
public readonly appmesh: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appmesh AwsProvider#appmesh}

---

##### `appregistry`<sup>Optional</sup> <a name="appregistry" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appregistry"></a>

```typescript
public readonly appregistry: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appregistry AwsProvider#appregistry}

---

##### `apprunner`<sup>Optional</sup> <a name="apprunner" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.apprunner"></a>

```typescript
public readonly apprunner: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apprunner AwsProvider#apprunner}

---

##### `appstream`<sup>Optional</sup> <a name="appstream" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appstream"></a>

```typescript
public readonly appstream: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appstream AwsProvider#appstream}

---

##### `appsync`<sup>Optional</sup> <a name="appsync" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.appsync"></a>

```typescript
public readonly appsync: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appsync AwsProvider#appsync}

---

##### `athena`<sup>Optional</sup> <a name="athena" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.athena"></a>

```typescript
public readonly athena: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#athena AwsProvider#athena}

---

##### `auditmanager`<sup>Optional</sup> <a name="auditmanager" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.auditmanager"></a>

```typescript
public readonly auditmanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#auditmanager AwsProvider#auditmanager}

---

##### `augmentedairuntime`<sup>Optional</sup> <a name="augmentedairuntime" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.augmentedairuntime"></a>

```typescript
public readonly augmentedairuntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#augmentedairuntime AwsProvider#augmentedairuntime}

---

##### `autoscaling`<sup>Optional</sup> <a name="autoscaling" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.autoscaling"></a>

```typescript
public readonly autoscaling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#autoscaling AwsProvider#autoscaling}

---

##### `autoscalingplans`<sup>Optional</sup> <a name="autoscalingplans" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.autoscalingplans"></a>

```typescript
public readonly autoscalingplans: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#autoscalingplans AwsProvider#autoscalingplans}

---

##### `backup`<sup>Optional</sup> <a name="backup" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.backup"></a>

```typescript
public readonly backup: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#backup AwsProvider#backup}

---

##### `batch`<sup>Optional</sup> <a name="batch" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.batch"></a>

```typescript
public readonly batch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#batch AwsProvider#batch}

---

##### `braket`<sup>Optional</sup> <a name="braket" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.braket"></a>

```typescript
public readonly braket: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#braket AwsProvider#braket}

---

##### `budgets`<sup>Optional</sup> <a name="budgets" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.budgets"></a>

```typescript
public readonly budgets: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#budgets AwsProvider#budgets}

---

##### `chime`<sup>Optional</sup> <a name="chime" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.chime"></a>

```typescript
public readonly chime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#chime AwsProvider#chime}

---

##### `cloud9`<sup>Optional</sup> <a name="cloud9" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloud9"></a>

```typescript
public readonly cloud9: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloud9 AwsProvider#cloud9}

---

##### `cloudcontrol`<sup>Optional</sup> <a name="cloudcontrol" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudcontrol"></a>

```typescript
public readonly cloudcontrol: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudcontrol AwsProvider#cloudcontrol}

---

##### `cloudcontrolapi`<sup>Optional</sup> <a name="cloudcontrolapi" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudcontrolapi"></a>

```typescript
public readonly cloudcontrolapi: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudcontrolapi AwsProvider#cloudcontrolapi}

---

##### `clouddirectory`<sup>Optional</sup> <a name="clouddirectory" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.clouddirectory"></a>

```typescript
public readonly clouddirectory: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#clouddirectory AwsProvider#clouddirectory}

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudformation"></a>

```typescript
public readonly cloudformation: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudformation AwsProvider#cloudformation}

---

##### `cloudfront`<sup>Optional</sup> <a name="cloudfront" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudfront"></a>

```typescript
public readonly cloudfront: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudfront AwsProvider#cloudfront}

---

##### `cloudhsm`<sup>Optional</sup> <a name="cloudhsm" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudhsm"></a>

```typescript
public readonly cloudhsm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudhsm AwsProvider#cloudhsm}

---

##### `cloudhsmv2`<sup>Optional</sup> <a name="cloudhsmv2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudhsmv2"></a>

```typescript
public readonly cloudhsmv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudhsmv2 AwsProvider#cloudhsmv2}

---

##### `cloudsearch`<sup>Optional</sup> <a name="cloudsearch" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudsearch"></a>

```typescript
public readonly cloudsearch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudsearch AwsProvider#cloudsearch}

---

##### `cloudsearchdomain`<sup>Optional</sup> <a name="cloudsearchdomain" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudsearchdomain"></a>

```typescript
public readonly cloudsearchdomain: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudsearchdomain AwsProvider#cloudsearchdomain}

---

##### `cloudtrail`<sup>Optional</sup> <a name="cloudtrail" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudtrail"></a>

```typescript
public readonly cloudtrail: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudtrail AwsProvider#cloudtrail}

---

##### `cloudwatch`<sup>Optional</sup> <a name="cloudwatch" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatch AwsProvider#cloudwatch}

---

##### `cloudwatchevents`<sup>Optional</sup> <a name="cloudwatchevents" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudwatchevents"></a>

```typescript
public readonly cloudwatchevents: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatchevents AwsProvider#cloudwatchevents}

---

##### `cloudwatchlogs`<sup>Optional</sup> <a name="cloudwatchlogs" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cloudwatchlogs"></a>

```typescript
public readonly cloudwatchlogs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatchlogs AwsProvider#cloudwatchlogs}

---

##### `codeartifact`<sup>Optional</sup> <a name="codeartifact" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codeartifact"></a>

```typescript
public readonly codeartifact: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codeartifact AwsProvider#codeartifact}

---

##### `codebuild`<sup>Optional</sup> <a name="codebuild" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codebuild"></a>

```typescript
public readonly codebuild: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codebuild AwsProvider#codebuild}

---

##### `codecommit`<sup>Optional</sup> <a name="codecommit" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codecommit"></a>

```typescript
public readonly codecommit: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codecommit AwsProvider#codecommit}

---

##### `codedeploy`<sup>Optional</sup> <a name="codedeploy" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codedeploy"></a>

```typescript
public readonly codedeploy: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codedeploy AwsProvider#codedeploy}

---

##### `codeguruprofiler`<sup>Optional</sup> <a name="codeguruprofiler" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codeguruprofiler"></a>

```typescript
public readonly codeguruprofiler: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codeguruprofiler AwsProvider#codeguruprofiler}

---

##### `codegurureviewer`<sup>Optional</sup> <a name="codegurureviewer" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codegurureviewer"></a>

```typescript
public readonly codegurureviewer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codegurureviewer AwsProvider#codegurureviewer}

---

##### `codepipeline`<sup>Optional</sup> <a name="codepipeline" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codepipeline"></a>

```typescript
public readonly codepipeline: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codepipeline AwsProvider#codepipeline}

---

##### `codestar`<sup>Optional</sup> <a name="codestar" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codestar"></a>

```typescript
public readonly codestar: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestar AwsProvider#codestar}

---

##### `codestarconnections`<sup>Optional</sup> <a name="codestarconnections" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codestarconnections"></a>

```typescript
public readonly codestarconnections: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestarconnections AwsProvider#codestarconnections}

---

##### `codestarnotifications`<sup>Optional</sup> <a name="codestarnotifications" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.codestarnotifications"></a>

```typescript
public readonly codestarnotifications: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestarnotifications AwsProvider#codestarnotifications}

---

##### `cognitoidentity`<sup>Optional</sup> <a name="cognitoidentity" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cognitoidentity"></a>

```typescript
public readonly cognitoidentity: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidentity AwsProvider#cognitoidentity}

---

##### `cognitoidentityprovider`<sup>Optional</sup> <a name="cognitoidentityprovider" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cognitoidentityprovider"></a>

```typescript
public readonly cognitoidentityprovider: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidentityprovider AwsProvider#cognitoidentityprovider}

---

##### `cognitoidp`<sup>Optional</sup> <a name="cognitoidp" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cognitoidp"></a>

```typescript
public readonly cognitoidp: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidp AwsProvider#cognitoidp}

---

##### `cognitosync`<sup>Optional</sup> <a name="cognitosync" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cognitosync"></a>

```typescript
public readonly cognitosync: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitosync AwsProvider#cognitosync}

---

##### `comprehend`<sup>Optional</sup> <a name="comprehend" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.comprehend"></a>

```typescript
public readonly comprehend: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#comprehend AwsProvider#comprehend}

---

##### `comprehendmedical`<sup>Optional</sup> <a name="comprehendmedical" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.comprehendmedical"></a>

```typescript
public readonly comprehendmedical: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#comprehendmedical AwsProvider#comprehendmedical}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.config"></a>

```typescript
public readonly config: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#config AwsProvider#config}

---

##### `configservice`<sup>Optional</sup> <a name="configservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.configservice"></a>

```typescript
public readonly configservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#configservice AwsProvider#configservice}

---

##### `connect`<sup>Optional</sup> <a name="connect" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.connect"></a>

```typescript
public readonly connect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connect AwsProvider#connect}

---

##### `connectcontactlens`<sup>Optional</sup> <a name="connectcontactlens" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.connectcontactlens"></a>

```typescript
public readonly connectcontactlens: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connectcontactlens AwsProvider#connectcontactlens}

---

##### `connectparticipant`<sup>Optional</sup> <a name="connectparticipant" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.connectparticipant"></a>

```typescript
public readonly connectparticipant: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connectparticipant AwsProvider#connectparticipant}

---

##### `costandusagereportservice`<sup>Optional</sup> <a name="costandusagereportservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.costandusagereportservice"></a>

```typescript
public readonly costandusagereportservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#costandusagereportservice AwsProvider#costandusagereportservice}

---

##### `costexplorer`<sup>Optional</sup> <a name="costexplorer" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.costexplorer"></a>

```typescript
public readonly costexplorer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#costexplorer AwsProvider#costexplorer}

---

##### `cur`<sup>Optional</sup> <a name="cur" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.cur"></a>

```typescript
public readonly cur: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cur AwsProvider#cur}

---

##### `databasemigration`<sup>Optional</sup> <a name="databasemigration" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.databasemigration"></a>

```typescript
public readonly databasemigration: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#databasemigration AwsProvider#databasemigration}

---

##### `databasemigrationservice`<sup>Optional</sup> <a name="databasemigrationservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.databasemigrationservice"></a>

```typescript
public readonly databasemigrationservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#databasemigrationservice AwsProvider#databasemigrationservice}

---

##### `dataexchange`<sup>Optional</sup> <a name="dataexchange" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dataexchange"></a>

```typescript
public readonly dataexchange: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dataexchange AwsProvider#dataexchange}

---

##### `datapipeline`<sup>Optional</sup> <a name="datapipeline" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.datapipeline"></a>

```typescript
public readonly datapipeline: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#datapipeline AwsProvider#datapipeline}

---

##### `datasync`<sup>Optional</sup> <a name="datasync" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.datasync"></a>

```typescript
public readonly datasync: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#datasync AwsProvider#datasync}

---

##### `dax`<sup>Optional</sup> <a name="dax" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dax"></a>

```typescript
public readonly dax: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dax AwsProvider#dax}

---

##### `detective`<sup>Optional</sup> <a name="detective" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.detective"></a>

```typescript
public readonly detective: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#detective AwsProvider#detective}

---

##### `devicefarm`<sup>Optional</sup> <a name="devicefarm" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.devicefarm"></a>

```typescript
public readonly devicefarm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#devicefarm AwsProvider#devicefarm}

---

##### `devopsguru`<sup>Optional</sup> <a name="devopsguru" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.devopsguru"></a>

```typescript
public readonly devopsguru: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#devopsguru AwsProvider#devopsguru}

---

##### `directconnect`<sup>Optional</sup> <a name="directconnect" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.directconnect"></a>

```typescript
public readonly directconnect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#directconnect AwsProvider#directconnect}

---

##### `dlm`<sup>Optional</sup> <a name="dlm" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dlm"></a>

```typescript
public readonly dlm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dlm AwsProvider#dlm}

---

##### `dms`<sup>Optional</sup> <a name="dms" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dms"></a>

```typescript
public readonly dms: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dms AwsProvider#dms}

---

##### `docdb`<sup>Optional</sup> <a name="docdb" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.docdb"></a>

```typescript
public readonly docdb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#docdb AwsProvider#docdb}

---

##### `ds`<sup>Optional</sup> <a name="ds" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ds"></a>

```typescript
public readonly ds: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ds AwsProvider#ds}

---

##### `dynamodb`<sup>Optional</sup> <a name="dynamodb" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dynamodb"></a>

```typescript
public readonly dynamodb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dynamodb AwsProvider#dynamodb}

---

##### `dynamodbstreams`<sup>Optional</sup> <a name="dynamodbstreams" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.dynamodbstreams"></a>

```typescript
public readonly dynamodbstreams: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dynamodbstreams AwsProvider#dynamodbstreams}

---

##### `ec2`<sup>Optional</sup> <a name="ec2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ec2"></a>

```typescript
public readonly ec2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ec2 AwsProvider#ec2}

---

##### `ec2Instanceconnect`<sup>Optional</sup> <a name="ec2Instanceconnect" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ec2Instanceconnect"></a>

```typescript
public readonly ec2Instanceconnect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ec2instanceconnect AwsProvider#ec2instanceconnect}

---

##### `ecr`<sup>Optional</sup> <a name="ecr" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ecr"></a>

```typescript
public readonly ecr: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecr AwsProvider#ecr}

---

##### `ecrpublic`<sup>Optional</sup> <a name="ecrpublic" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ecrpublic"></a>

```typescript
public readonly ecrpublic: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecrpublic AwsProvider#ecrpublic}

---

##### `ecs`<sup>Optional</sup> <a name="ecs" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ecs"></a>

```typescript
public readonly ecs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecs AwsProvider#ecs}

---

##### `efs`<sup>Optional</sup> <a name="efs" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.efs"></a>

```typescript
public readonly efs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#efs AwsProvider#efs}

---

##### `eks`<sup>Optional</sup> <a name="eks" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.eks"></a>

```typescript
public readonly eks: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#eks AwsProvider#eks}

---

##### `elasticache`<sup>Optional</sup> <a name="elasticache" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticache"></a>

```typescript
public readonly elasticache: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticache AwsProvider#elasticache}

---

##### `elasticbeanstalk`<sup>Optional</sup> <a name="elasticbeanstalk" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticbeanstalk"></a>

```typescript
public readonly elasticbeanstalk: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticbeanstalk AwsProvider#elasticbeanstalk}

---

##### `elasticinference`<sup>Optional</sup> <a name="elasticinference" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticinference"></a>

```typescript
public readonly elasticinference: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticinference AwsProvider#elasticinference}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticsearch AwsProvider#elasticsearch}

---

##### `elasticsearchservice`<sup>Optional</sup> <a name="elasticsearchservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elasticsearchservice"></a>

```typescript
public readonly elasticsearchservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticsearchservice AwsProvider#elasticsearchservice}

---

##### `elastictranscoder`<sup>Optional</sup> <a name="elastictranscoder" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elastictranscoder"></a>

```typescript
public readonly elastictranscoder: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elastictranscoder AwsProvider#elastictranscoder}

---

##### `elb`<sup>Optional</sup> <a name="elb" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elb"></a>

```typescript
public readonly elb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elb AwsProvider#elb}

---

##### `elbv2`<sup>Optional</sup> <a name="elbv2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.elbv2"></a>

```typescript
public readonly elbv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elbv2 AwsProvider#elbv2}

---

##### `emr`<sup>Optional</sup> <a name="emr" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.emr"></a>

```typescript
public readonly emr: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#emr AwsProvider#emr}

---

##### `emrcontainers`<sup>Optional</sup> <a name="emrcontainers" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.emrcontainers"></a>

```typescript
public readonly emrcontainers: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#emrcontainers AwsProvider#emrcontainers}

---

##### `es`<sup>Optional</sup> <a name="es" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.es"></a>

```typescript
public readonly es: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#es AwsProvider#es}

---

##### `eventbridge`<sup>Optional</sup> <a name="eventbridge" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.eventbridge"></a>

```typescript
public readonly eventbridge: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#eventbridge AwsProvider#eventbridge}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.events"></a>

```typescript
public readonly events: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#events AwsProvider#events}

---

##### `finspace`<sup>Optional</sup> <a name="finspace" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.finspace"></a>

```typescript
public readonly finspace: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#finspace AwsProvider#finspace}

---

##### `finspacedata`<sup>Optional</sup> <a name="finspacedata" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.finspacedata"></a>

```typescript
public readonly finspacedata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#finspacedata AwsProvider#finspacedata}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.firehose"></a>

```typescript
public readonly firehose: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#firehose AwsProvider#firehose}

---

##### `fis`<sup>Optional</sup> <a name="fis" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.fis"></a>

```typescript
public readonly fis: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fis AwsProvider#fis}

---

##### `fms`<sup>Optional</sup> <a name="fms" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.fms"></a>

```typescript
public readonly fms: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fms AwsProvider#fms}

---

##### `forecast`<sup>Optional</sup> <a name="forecast" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.forecast"></a>

```typescript
public readonly forecast: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecast AwsProvider#forecast}

---

##### `forecastquery`<sup>Optional</sup> <a name="forecastquery" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.forecastquery"></a>

```typescript
public readonly forecastquery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastquery AwsProvider#forecastquery}

---

##### `forecastqueryservice`<sup>Optional</sup> <a name="forecastqueryservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.forecastqueryservice"></a>

```typescript
public readonly forecastqueryservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastqueryservice AwsProvider#forecastqueryservice}

---

##### `forecastservice`<sup>Optional</sup> <a name="forecastservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.forecastservice"></a>

```typescript
public readonly forecastservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastservice AwsProvider#forecastservice}

---

##### `frauddetector`<sup>Optional</sup> <a name="frauddetector" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.frauddetector"></a>

```typescript
public readonly frauddetector: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#frauddetector AwsProvider#frauddetector}

---

##### `fsx`<sup>Optional</sup> <a name="fsx" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.fsx"></a>

```typescript
public readonly fsx: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fsx AwsProvider#fsx}

---

##### `gamelift`<sup>Optional</sup> <a name="gamelift" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.gamelift"></a>

```typescript
public readonly gamelift: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#gamelift AwsProvider#gamelift}

---

##### `glacier`<sup>Optional</sup> <a name="glacier" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.glacier"></a>

```typescript
public readonly glacier: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#glacier AwsProvider#glacier}

---

##### `globalaccelerator`<sup>Optional</sup> <a name="globalaccelerator" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.globalaccelerator"></a>

```typescript
public readonly globalaccelerator: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#globalaccelerator AwsProvider#globalaccelerator}

---

##### `glue`<sup>Optional</sup> <a name="glue" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.glue"></a>

```typescript
public readonly glue: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#glue AwsProvider#glue}

---

##### `gluedatabrew`<sup>Optional</sup> <a name="gluedatabrew" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.gluedatabrew"></a>

```typescript
public readonly gluedatabrew: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#gluedatabrew AwsProvider#gluedatabrew}

---

##### `greengrass`<sup>Optional</sup> <a name="greengrass" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.greengrass"></a>

```typescript
public readonly greengrass: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#greengrass AwsProvider#greengrass}

---

##### `greengrassv2`<sup>Optional</sup> <a name="greengrassv2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.greengrassv2"></a>

```typescript
public readonly greengrassv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#greengrassv2 AwsProvider#greengrassv2}

---

##### `groundstation`<sup>Optional</sup> <a name="groundstation" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.groundstation"></a>

```typescript
public readonly groundstation: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#groundstation AwsProvider#groundstation}

---

##### `guardduty`<sup>Optional</sup> <a name="guardduty" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.guardduty"></a>

```typescript
public readonly guardduty: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#guardduty AwsProvider#guardduty}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.health"></a>

```typescript
public readonly health: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#health AwsProvider#health}

---

##### `healthlake`<sup>Optional</sup> <a name="healthlake" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.healthlake"></a>

```typescript
public readonly healthlake: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#healthlake AwsProvider#healthlake}

---

##### `honeycode`<sup>Optional</sup> <a name="honeycode" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.honeycode"></a>

```typescript
public readonly honeycode: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#honeycode AwsProvider#honeycode}

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iam"></a>

```typescript
public readonly iam: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iam AwsProvider#iam}

---

##### `identitystore`<sup>Optional</sup> <a name="identitystore" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.identitystore"></a>

```typescript
public readonly identitystore: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#identitystore AwsProvider#identitystore}

---

##### `imagebuilder`<sup>Optional</sup> <a name="imagebuilder" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.imagebuilder"></a>

```typescript
public readonly imagebuilder: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#imagebuilder AwsProvider#imagebuilder}

---

##### `inspector`<sup>Optional</sup> <a name="inspector" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.inspector"></a>

```typescript
public readonly inspector: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#inspector AwsProvider#inspector}

---

##### `iot`<sup>Optional</sup> <a name="iot" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iot"></a>

```typescript
public readonly iot: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot AwsProvider#iot}

---

##### `iot1Clickdevices`<sup>Optional</sup> <a name="iot1Clickdevices" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iot1Clickdevices"></a>

```typescript
public readonly iot1Clickdevices: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickdevices AwsProvider#iot1clickdevices}

---

##### `iot1Clickdevicesservice`<sup>Optional</sup> <a name="iot1Clickdevicesservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iot1Clickdevicesservice"></a>

```typescript
public readonly iot1Clickdevicesservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickdevicesservice AwsProvider#iot1clickdevicesservice}

---

##### `iot1Clickprojects`<sup>Optional</sup> <a name="iot1Clickprojects" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iot1Clickprojects"></a>

```typescript
public readonly iot1Clickprojects: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickprojects AwsProvider#iot1clickprojects}

---

##### `iotanalytics`<sup>Optional</sup> <a name="iotanalytics" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotanalytics"></a>

```typescript
public readonly iotanalytics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotanalytics AwsProvider#iotanalytics}

---

##### `iotdataplane`<sup>Optional</sup> <a name="iotdataplane" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotdataplane"></a>

```typescript
public readonly iotdataplane: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotdataplane AwsProvider#iotdataplane}

---

##### `iotdeviceadvisor`<sup>Optional</sup> <a name="iotdeviceadvisor" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotdeviceadvisor"></a>

```typescript
public readonly iotdeviceadvisor: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotdeviceadvisor AwsProvider#iotdeviceadvisor}

---

##### `iotevents`<sup>Optional</sup> <a name="iotevents" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotevents"></a>

```typescript
public readonly iotevents: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotevents AwsProvider#iotevents}

---

##### `ioteventsdata`<sup>Optional</sup> <a name="ioteventsdata" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ioteventsdata"></a>

```typescript
public readonly ioteventsdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ioteventsdata AwsProvider#ioteventsdata}

---

##### `iotfleethub`<sup>Optional</sup> <a name="iotfleethub" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotfleethub"></a>

```typescript
public readonly iotfleethub: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotfleethub AwsProvider#iotfleethub}

---

##### `iotjobsdataplane`<sup>Optional</sup> <a name="iotjobsdataplane" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotjobsdataplane"></a>

```typescript
public readonly iotjobsdataplane: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotjobsdataplane AwsProvider#iotjobsdataplane}

---

##### `iotsecuretunneling`<sup>Optional</sup> <a name="iotsecuretunneling" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotsecuretunneling"></a>

```typescript
public readonly iotsecuretunneling: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotsecuretunneling AwsProvider#iotsecuretunneling}

---

##### `iotsitewise`<sup>Optional</sup> <a name="iotsitewise" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotsitewise"></a>

```typescript
public readonly iotsitewise: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotsitewise AwsProvider#iotsitewise}

---

##### `iotthingsgraph`<sup>Optional</sup> <a name="iotthingsgraph" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotthingsgraph"></a>

```typescript
public readonly iotthingsgraph: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotthingsgraph AwsProvider#iotthingsgraph}

---

##### `iotwireless`<sup>Optional</sup> <a name="iotwireless" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.iotwireless"></a>

```typescript
public readonly iotwireless: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotwireless AwsProvider#iotwireless}

---

##### `kafka`<sup>Optional</sup> <a name="kafka" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kafka"></a>

```typescript
public readonly kafka: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kafka AwsProvider#kafka}

---

##### `kafkaconnect`<sup>Optional</sup> <a name="kafkaconnect" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kafkaconnect"></a>

```typescript
public readonly kafkaconnect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kafkaconnect AwsProvider#kafkaconnect}

---

##### `kendra`<sup>Optional</sup> <a name="kendra" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kendra"></a>

```typescript
public readonly kendra: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kendra AwsProvider#kendra}

---

##### `kinesis`<sup>Optional</sup> <a name="kinesis" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesis"></a>

```typescript
public readonly kinesis: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesis AwsProvider#kinesis}

---

##### `kinesisanalytics`<sup>Optional</sup> <a name="kinesisanalytics" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisanalytics"></a>

```typescript
public readonly kinesisanalytics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisanalytics AwsProvider#kinesisanalytics}

---

##### `kinesisanalyticsv2`<sup>Optional</sup> <a name="kinesisanalyticsv2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisanalyticsv2"></a>

```typescript
public readonly kinesisanalyticsv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}

---

##### `kinesisvideo`<sup>Optional</sup> <a name="kinesisvideo" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisvideo"></a>

```typescript
public readonly kinesisvideo: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideo AwsProvider#kinesisvideo}

---

##### `kinesisvideoarchivedmedia`<sup>Optional</sup> <a name="kinesisvideoarchivedmedia" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisvideoarchivedmedia"></a>

```typescript
public readonly kinesisvideoarchivedmedia: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideoarchivedmedia AwsProvider#kinesisvideoarchivedmedia}

---

##### `kinesisvideomedia`<sup>Optional</sup> <a name="kinesisvideomedia" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisvideomedia"></a>

```typescript
public readonly kinesisvideomedia: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideomedia AwsProvider#kinesisvideomedia}

---

##### `kinesisvideosignalingchannels`<sup>Optional</sup> <a name="kinesisvideosignalingchannels" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kinesisvideosignalingchannels"></a>

```typescript
public readonly kinesisvideosignalingchannels: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideosignalingchannels AwsProvider#kinesisvideosignalingchannels}

---

##### `kms`<sup>Optional</sup> <a name="kms" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.kms"></a>

```typescript
public readonly kms: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kms AwsProvider#kms}

---

##### `lakeformation`<sup>Optional</sup> <a name="lakeformation" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lakeformation"></a>

```typescript
public readonly lakeformation: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lakeformation AwsProvider#lakeformation}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lambda AwsProvider#lambda}

---

##### `lexmodelbuilding`<sup>Optional</sup> <a name="lexmodelbuilding" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexmodelbuilding"></a>

```typescript
public readonly lexmodelbuilding: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelbuilding AwsProvider#lexmodelbuilding}

---

##### `lexmodelbuildingservice`<sup>Optional</sup> <a name="lexmodelbuildingservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexmodelbuildingservice"></a>

```typescript
public readonly lexmodelbuildingservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}

---

##### `lexmodels`<sup>Optional</sup> <a name="lexmodels" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexmodels"></a>

```typescript
public readonly lexmodels: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodels AwsProvider#lexmodels}

---

##### `lexmodelsv2`<sup>Optional</sup> <a name="lexmodelsv2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexmodelsv2"></a>

```typescript
public readonly lexmodelsv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelsv2 AwsProvider#lexmodelsv2}

---

##### `lexruntime`<sup>Optional</sup> <a name="lexruntime" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexruntime"></a>

```typescript
public readonly lexruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntime AwsProvider#lexruntime}

---

##### `lexruntimeservice`<sup>Optional</sup> <a name="lexruntimeservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexruntimeservice"></a>

```typescript
public readonly lexruntimeservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntimeservice AwsProvider#lexruntimeservice}

---

##### `lexruntimev2`<sup>Optional</sup> <a name="lexruntimev2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lexruntimev2"></a>

```typescript
public readonly lexruntimev2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntimev2 AwsProvider#lexruntimev2}

---

##### `licensemanager`<sup>Optional</sup> <a name="licensemanager" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.licensemanager"></a>

```typescript
public readonly licensemanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#licensemanager AwsProvider#licensemanager}

---

##### `lightsail`<sup>Optional</sup> <a name="lightsail" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lightsail"></a>

```typescript
public readonly lightsail: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lightsail AwsProvider#lightsail}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#location AwsProvider#location}

---

##### `lookoutequipment`<sup>Optional</sup> <a name="lookoutequipment" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lookoutequipment"></a>

```typescript
public readonly lookoutequipment: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutequipment AwsProvider#lookoutequipment}

---

##### `lookoutforvision`<sup>Optional</sup> <a name="lookoutforvision" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lookoutforvision"></a>

```typescript
public readonly lookoutforvision: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutforvision AwsProvider#lookoutforvision}

---

##### `lookoutmetrics`<sup>Optional</sup> <a name="lookoutmetrics" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.lookoutmetrics"></a>

```typescript
public readonly lookoutmetrics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutmetrics AwsProvider#lookoutmetrics}

---

##### `machinelearning`<sup>Optional</sup> <a name="machinelearning" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.machinelearning"></a>

```typescript
public readonly machinelearning: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#machinelearning AwsProvider#machinelearning}

---

##### `macie`<sup>Optional</sup> <a name="macie" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.macie"></a>

```typescript
public readonly macie: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#macie AwsProvider#macie}

---

##### `macie2`<sup>Optional</sup> <a name="macie2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.macie2"></a>

```typescript
public readonly macie2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#macie2 AwsProvider#macie2}

---

##### `managedblockchain`<sup>Optional</sup> <a name="managedblockchain" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.managedblockchain"></a>

```typescript
public readonly managedblockchain: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#managedblockchain AwsProvider#managedblockchain}

---

##### `marketplacecatalog`<sup>Optional</sup> <a name="marketplacecatalog" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplacecatalog"></a>

```typescript
public readonly marketplacecatalog: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacecatalog AwsProvider#marketplacecatalog}

---

##### `marketplacecommerceanalytics`<sup>Optional</sup> <a name="marketplacecommerceanalytics" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplacecommerceanalytics"></a>

```typescript
public readonly marketplacecommerceanalytics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacecommerceanalytics AwsProvider#marketplacecommerceanalytics}

---

##### `marketplaceentitlement`<sup>Optional</sup> <a name="marketplaceentitlement" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplaceentitlement"></a>

```typescript
public readonly marketplaceentitlement: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplaceentitlement AwsProvider#marketplaceentitlement}

---

##### `marketplaceentitlementservice`<sup>Optional</sup> <a name="marketplaceentitlementservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplaceentitlementservice"></a>

```typescript
public readonly marketplaceentitlementservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplaceentitlementservice AwsProvider#marketplaceentitlementservice}

---

##### `marketplacemetering`<sup>Optional</sup> <a name="marketplacemetering" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.marketplacemetering"></a>

```typescript
public readonly marketplacemetering: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacemetering AwsProvider#marketplacemetering}

---

##### `mediaconnect`<sup>Optional</sup> <a name="mediaconnect" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediaconnect"></a>

```typescript
public readonly mediaconnect: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediaconnect AwsProvider#mediaconnect}

---

##### `mediaconvert`<sup>Optional</sup> <a name="mediaconvert" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediaconvert"></a>

```typescript
public readonly mediaconvert: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediaconvert AwsProvider#mediaconvert}

---

##### `medialive`<sup>Optional</sup> <a name="medialive" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.medialive"></a>

```typescript
public readonly medialive: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#medialive AwsProvider#medialive}

---

##### `mediapackage`<sup>Optional</sup> <a name="mediapackage" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediapackage"></a>

```typescript
public readonly mediapackage: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediapackage AwsProvider#mediapackage}

---

##### `mediapackagevod`<sup>Optional</sup> <a name="mediapackagevod" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediapackagevod"></a>

```typescript
public readonly mediapackagevod: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediapackagevod AwsProvider#mediapackagevod}

---

##### `mediastore`<sup>Optional</sup> <a name="mediastore" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediastore"></a>

```typescript
public readonly mediastore: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediastore AwsProvider#mediastore}

---

##### `mediastoredata`<sup>Optional</sup> <a name="mediastoredata" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediastoredata"></a>

```typescript
public readonly mediastoredata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediastoredata AwsProvider#mediastoredata}

---

##### `mediatailor`<sup>Optional</sup> <a name="mediatailor" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mediatailor"></a>

```typescript
public readonly mediatailor: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediatailor AwsProvider#mediatailor}

---

##### `memorydb`<sup>Optional</sup> <a name="memorydb" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.memorydb"></a>

```typescript
public readonly memorydb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#memorydb AwsProvider#memorydb}

---

##### `mgn`<sup>Optional</sup> <a name="mgn" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mgn"></a>

```typescript
public readonly mgn: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mgn AwsProvider#mgn}

---

##### `migrationhub`<sup>Optional</sup> <a name="migrationhub" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.migrationhub"></a>

```typescript
public readonly migrationhub: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#migrationhub AwsProvider#migrationhub}

---

##### `migrationhubconfig`<sup>Optional</sup> <a name="migrationhubconfig" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.migrationhubconfig"></a>

```typescript
public readonly migrationhubconfig: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#migrationhubconfig AwsProvider#migrationhubconfig}

---

##### `mobile`<sup>Optional</sup> <a name="mobile" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mobile"></a>

```typescript
public readonly mobile: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mobile AwsProvider#mobile}

---

##### `mobileanalytics`<sup>Optional</sup> <a name="mobileanalytics" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mobileanalytics"></a>

```typescript
public readonly mobileanalytics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mobileanalytics AwsProvider#mobileanalytics}

---

##### `mq`<sup>Optional</sup> <a name="mq" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mq"></a>

```typescript
public readonly mq: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mq AwsProvider#mq}

---

##### `mturk`<sup>Optional</sup> <a name="mturk" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mturk"></a>

```typescript
public readonly mturk: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mturk AwsProvider#mturk}

---

##### `mwaa`<sup>Optional</sup> <a name="mwaa" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.mwaa"></a>

```typescript
public readonly mwaa: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mwaa AwsProvider#mwaa}

---

##### `neptune`<sup>Optional</sup> <a name="neptune" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.neptune"></a>

```typescript
public readonly neptune: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#neptune AwsProvider#neptune}

---

##### `networkfirewall`<sup>Optional</sup> <a name="networkfirewall" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.networkfirewall"></a>

```typescript
public readonly networkfirewall: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#networkfirewall AwsProvider#networkfirewall}

---

##### `networkmanager`<sup>Optional</sup> <a name="networkmanager" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.networkmanager"></a>

```typescript
public readonly networkmanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#networkmanager AwsProvider#networkmanager}

---

##### `nimblestudio`<sup>Optional</sup> <a name="nimblestudio" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.nimblestudio"></a>

```typescript
public readonly nimblestudio: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#nimblestudio AwsProvider#nimblestudio}

---

##### `opsworks`<sup>Optional</sup> <a name="opsworks" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.opsworks"></a>

```typescript
public readonly opsworks: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#opsworks AwsProvider#opsworks}

---

##### `opsworkscm`<sup>Optional</sup> <a name="opsworkscm" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.opsworkscm"></a>

```typescript
public readonly opsworkscm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#opsworkscm AwsProvider#opsworkscm}

---

##### `organizations`<sup>Optional</sup> <a name="organizations" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.organizations"></a>

```typescript
public readonly organizations: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#organizations AwsProvider#organizations}

---

##### `outposts`<sup>Optional</sup> <a name="outposts" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.outposts"></a>

```typescript
public readonly outposts: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#outposts AwsProvider#outposts}

---

##### `personalize`<sup>Optional</sup> <a name="personalize" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.personalize"></a>

```typescript
public readonly personalize: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalize AwsProvider#personalize}

---

##### `personalizeevents`<sup>Optional</sup> <a name="personalizeevents" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.personalizeevents"></a>

```typescript
public readonly personalizeevents: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalizeevents AwsProvider#personalizeevents}

---

##### `personalizeruntime`<sup>Optional</sup> <a name="personalizeruntime" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.personalizeruntime"></a>

```typescript
public readonly personalizeruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalizeruntime AwsProvider#personalizeruntime}

---

##### `pi`<sup>Optional</sup> <a name="pi" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pi"></a>

```typescript
public readonly pi: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pi AwsProvider#pi}

---

##### `pinpoint`<sup>Optional</sup> <a name="pinpoint" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pinpoint"></a>

```typescript
public readonly pinpoint: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpoint AwsProvider#pinpoint}

---

##### `pinpointemail`<sup>Optional</sup> <a name="pinpointemail" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pinpointemail"></a>

```typescript
public readonly pinpointemail: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpointemail AwsProvider#pinpointemail}

---

##### `pinpointsmsvoice`<sup>Optional</sup> <a name="pinpointsmsvoice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pinpointsmsvoice"></a>

```typescript
public readonly pinpointsmsvoice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpointsmsvoice AwsProvider#pinpointsmsvoice}

---

##### `polly`<sup>Optional</sup> <a name="polly" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.polly"></a>

```typescript
public readonly polly: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#polly AwsProvider#polly}

---

##### `pricing`<sup>Optional</sup> <a name="pricing" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.pricing"></a>

```typescript
public readonly pricing: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pricing AwsProvider#pricing}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.prometheus"></a>

```typescript
public readonly prometheus: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#prometheus AwsProvider#prometheus}

---

##### `prometheusservice`<sup>Optional</sup> <a name="prometheusservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.prometheusservice"></a>

```typescript
public readonly prometheusservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#prometheusservice AwsProvider#prometheusservice}

---

##### `proton`<sup>Optional</sup> <a name="proton" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.proton"></a>

```typescript
public readonly proton: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#proton AwsProvider#proton}

---

##### `qldb`<sup>Optional</sup> <a name="qldb" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.qldb"></a>

```typescript
public readonly qldb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#qldb AwsProvider#qldb}

---

##### `qldbsession`<sup>Optional</sup> <a name="qldbsession" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.qldbsession"></a>

```typescript
public readonly qldbsession: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#qldbsession AwsProvider#qldbsession}

---

##### `quicksight`<sup>Optional</sup> <a name="quicksight" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.quicksight"></a>

```typescript
public readonly quicksight: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#quicksight AwsProvider#quicksight}

---

##### `ram`<sup>Optional</sup> <a name="ram" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ram"></a>

```typescript
public readonly ram: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ram AwsProvider#ram}

---

##### `rds`<sup>Optional</sup> <a name="rds" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.rds"></a>

```typescript
public readonly rds: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rds AwsProvider#rds}

---

##### `rdsdata`<sup>Optional</sup> <a name="rdsdata" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.rdsdata"></a>

```typescript
public readonly rdsdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rdsdata AwsProvider#rdsdata}

---

##### `rdsdataservice`<sup>Optional</sup> <a name="rdsdataservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.rdsdataservice"></a>

```typescript
public readonly rdsdataservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rdsdataservice AwsProvider#rdsdataservice}

---

##### `redshift`<sup>Optional</sup> <a name="redshift" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.redshift"></a>

```typescript
public readonly redshift: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#redshift AwsProvider#redshift}

---

##### `redshiftdata`<sup>Optional</sup> <a name="redshiftdata" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.redshiftdata"></a>

```typescript
public readonly redshiftdata: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#redshiftdata AwsProvider#redshiftdata}

---

##### `rekognition`<sup>Optional</sup> <a name="rekognition" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.rekognition"></a>

```typescript
public readonly rekognition: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rekognition AwsProvider#rekognition}

---

##### `resourcegroups`<sup>Optional</sup> <a name="resourcegroups" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.resourcegroups"></a>

```typescript
public readonly resourcegroups: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroups AwsProvider#resourcegroups}

---

##### `resourcegroupstagging`<sup>Optional</sup> <a name="resourcegroupstagging" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.resourcegroupstagging"></a>

```typescript
public readonly resourcegroupstagging: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroupstagging AwsProvider#resourcegroupstagging}

---

##### `resourcegroupstaggingapi`<sup>Optional</sup> <a name="resourcegroupstaggingapi" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.resourcegroupstaggingapi"></a>

```typescript
public readonly resourcegroupstaggingapi: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}

---

##### `robomaker`<sup>Optional</sup> <a name="robomaker" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.robomaker"></a>

```typescript
public readonly robomaker: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#robomaker AwsProvider#robomaker}

---

##### `route53`<sup>Optional</sup> <a name="route53" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53"></a>

```typescript
public readonly route53: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53 AwsProvider#route53}

---

##### `route53Domains`<sup>Optional</sup> <a name="route53Domains" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53Domains"></a>

```typescript
public readonly route53Domains: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53domains AwsProvider#route53domains}

---

##### `route53Recoverycontrolconfig`<sup>Optional</sup> <a name="route53Recoverycontrolconfig" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53Recoverycontrolconfig"></a>

```typescript
public readonly route53Recoverycontrolconfig: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}

---

##### `route53Recoveryreadiness`<sup>Optional</sup> <a name="route53Recoveryreadiness" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53Recoveryreadiness"></a>

```typescript
public readonly route53Recoveryreadiness: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53recoveryreadiness AwsProvider#route53recoveryreadiness}

---

##### `route53Resolver`<sup>Optional</sup> <a name="route53Resolver" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.route53Resolver"></a>

```typescript
public readonly route53Resolver: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53resolver AwsProvider#route53resolver}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.s3"></a>

```typescript
public readonly s3: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3 AwsProvider#s3}

---

##### `s3Control`<sup>Optional</sup> <a name="s3Control" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.s3Control"></a>

```typescript
public readonly s3Control: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3control AwsProvider#s3control}

---

##### `s3Outposts`<sup>Optional</sup> <a name="s3Outposts" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.s3Outposts"></a>

```typescript
public readonly s3Outposts: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3outposts AwsProvider#s3outposts}

---

##### `sagemaker`<sup>Optional</sup> <a name="sagemaker" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sagemaker"></a>

```typescript
public readonly sagemaker: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemaker AwsProvider#sagemaker}

---

##### `sagemakeredgemanager`<sup>Optional</sup> <a name="sagemakeredgemanager" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sagemakeredgemanager"></a>

```typescript
public readonly sagemakeredgemanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakeredgemanager AwsProvider#sagemakeredgemanager}

---

##### `sagemakerfeaturestoreruntime`<sup>Optional</sup> <a name="sagemakerfeaturestoreruntime" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sagemakerfeaturestoreruntime"></a>

```typescript
public readonly sagemakerfeaturestoreruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakerfeaturestoreruntime AwsProvider#sagemakerfeaturestoreruntime}

---

##### `sagemakerruntime`<sup>Optional</sup> <a name="sagemakerruntime" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sagemakerruntime"></a>

```typescript
public readonly sagemakerruntime: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakerruntime AwsProvider#sagemakerruntime}

---

##### `savingsplans`<sup>Optional</sup> <a name="savingsplans" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.savingsplans"></a>

```typescript
public readonly savingsplans: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#savingsplans AwsProvider#savingsplans}

---

##### `schemas`<sup>Optional</sup> <a name="schemas" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.schemas"></a>

```typescript
public readonly schemas: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#schemas AwsProvider#schemas}

---

##### `sdb`<sup>Optional</sup> <a name="sdb" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sdb"></a>

```typescript
public readonly sdb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sdb AwsProvider#sdb}

---

##### `secretsmanager`<sup>Optional</sup> <a name="secretsmanager" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.secretsmanager"></a>

```typescript
public readonly secretsmanager: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#secretsmanager AwsProvider#secretsmanager}

---

##### `securityhub`<sup>Optional</sup> <a name="securityhub" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.securityhub"></a>

```typescript
public readonly securityhub: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#securityhub AwsProvider#securityhub}

---

##### `serverlessapplicationrepository`<sup>Optional</sup> <a name="serverlessapplicationrepository" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.serverlessapplicationrepository"></a>

```typescript
public readonly serverlessapplicationrepository: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}

---

##### `serverlessapprepo`<sup>Optional</sup> <a name="serverlessapprepo" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.serverlessapprepo"></a>

```typescript
public readonly serverlessapprepo: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessapprepo AwsProvider#serverlessapprepo}

---

##### `serverlessrepo`<sup>Optional</sup> <a name="serverlessrepo" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.serverlessrepo"></a>

```typescript
public readonly serverlessrepo: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessrepo AwsProvider#serverlessrepo}

---

##### `servicecatalog`<sup>Optional</sup> <a name="servicecatalog" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.servicecatalog"></a>

```typescript
public readonly servicecatalog: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicecatalog AwsProvider#servicecatalog}

---

##### `servicediscovery`<sup>Optional</sup> <a name="servicediscovery" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.servicediscovery"></a>

```typescript
public readonly servicediscovery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicediscovery AwsProvider#servicediscovery}

---

##### `servicequotas`<sup>Optional</sup> <a name="servicequotas" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.servicequotas"></a>

```typescript
public readonly servicequotas: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicequotas AwsProvider#servicequotas}

---

##### `ses`<sup>Optional</sup> <a name="ses" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ses"></a>

```typescript
public readonly ses: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ses AwsProvider#ses}

---

##### `sesv2`<sup>Optional</sup> <a name="sesv2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sesv2"></a>

```typescript
public readonly sesv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sesv2 AwsProvider#sesv2}

---

##### `sfn`<sup>Optional</sup> <a name="sfn" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sfn"></a>

```typescript
public readonly sfn: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sfn AwsProvider#sfn}

---

##### `shield`<sup>Optional</sup> <a name="shield" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.shield"></a>

```typescript
public readonly shield: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#shield AwsProvider#shield}

---

##### `signer`<sup>Optional</sup> <a name="signer" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.signer"></a>

```typescript
public readonly signer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#signer AwsProvider#signer}

---

##### `simpledb`<sup>Optional</sup> <a name="simpledb" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.simpledb"></a>

```typescript
public readonly simpledb: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#simpledb AwsProvider#simpledb}

---

##### `sms`<sup>Optional</sup> <a name="sms" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sms"></a>

```typescript
public readonly sms: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sms AwsProvider#sms}

---

##### `snowball`<sup>Optional</sup> <a name="snowball" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.snowball"></a>

```typescript
public readonly snowball: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#snowball AwsProvider#snowball}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sns"></a>

```typescript
public readonly sns: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sns AwsProvider#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sqs"></a>

```typescript
public readonly sqs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sqs AwsProvider#sqs}

---

##### `ssm`<sup>Optional</sup> <a name="ssm" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssm"></a>

```typescript
public readonly ssm: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssm AwsProvider#ssm}

---

##### `ssmcontacts`<sup>Optional</sup> <a name="ssmcontacts" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssmcontacts"></a>

```typescript
public readonly ssmcontacts: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssmcontacts AwsProvider#ssmcontacts}

---

##### `ssmincidents`<sup>Optional</sup> <a name="ssmincidents" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssmincidents"></a>

```typescript
public readonly ssmincidents: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssmincidents AwsProvider#ssmincidents}

---

##### `sso`<sup>Optional</sup> <a name="sso" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sso"></a>

```typescript
public readonly sso: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sso AwsProvider#sso}

---

##### `ssoadmin`<sup>Optional</sup> <a name="ssoadmin" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssoadmin"></a>

```typescript
public readonly ssoadmin: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssoadmin AwsProvider#ssoadmin}

---

##### `ssooidc`<sup>Optional</sup> <a name="ssooidc" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.ssooidc"></a>

```typescript
public readonly ssooidc: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssooidc AwsProvider#ssooidc}

---

##### `stepfunctions`<sup>Optional</sup> <a name="stepfunctions" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.stepfunctions"></a>

```typescript
public readonly stepfunctions: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#stepfunctions AwsProvider#stepfunctions}

---

##### `storagegateway`<sup>Optional</sup> <a name="storagegateway" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.storagegateway"></a>

```typescript
public readonly storagegateway: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#storagegateway AwsProvider#storagegateway}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.sts"></a>

```typescript
public readonly sts: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sts AwsProvider#sts}

---

##### `support`<sup>Optional</sup> <a name="support" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.support"></a>

```typescript
public readonly support: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#support AwsProvider#support}

---

##### `swf`<sup>Optional</sup> <a name="swf" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.swf"></a>

```typescript
public readonly swf: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#swf AwsProvider#swf}

---

##### `synthetics`<sup>Optional</sup> <a name="synthetics" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.synthetics"></a>

```typescript
public readonly synthetics: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#synthetics AwsProvider#synthetics}

---

##### `textract`<sup>Optional</sup> <a name="textract" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.textract"></a>

```typescript
public readonly textract: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#textract AwsProvider#textract}

---

##### `timestreamquery`<sup>Optional</sup> <a name="timestreamquery" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.timestreamquery"></a>

```typescript
public readonly timestreamquery: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#timestreamquery AwsProvider#timestreamquery}

---

##### `timestreamwrite`<sup>Optional</sup> <a name="timestreamwrite" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.timestreamwrite"></a>

```typescript
public readonly timestreamwrite: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#timestreamwrite AwsProvider#timestreamwrite}

---

##### `transcribe`<sup>Optional</sup> <a name="transcribe" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transcribe"></a>

```typescript
public readonly transcribe: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribe AwsProvider#transcribe}

---

##### `transcribeservice`<sup>Optional</sup> <a name="transcribeservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transcribeservice"></a>

```typescript
public readonly transcribeservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribeservice AwsProvider#transcribeservice}

---

##### `transcribestreaming`<sup>Optional</sup> <a name="transcribestreaming" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transcribestreaming"></a>

```typescript
public readonly transcribestreaming: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribestreaming AwsProvider#transcribestreaming}

---

##### `transcribestreamingservice`<sup>Optional</sup> <a name="transcribestreamingservice" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transcribestreamingservice"></a>

```typescript
public readonly transcribestreamingservice: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribestreamingservice AwsProvider#transcribestreamingservice}

---

##### `transfer`<sup>Optional</sup> <a name="transfer" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.transfer"></a>

```typescript
public readonly transfer: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transfer AwsProvider#transfer}

---

##### `translate`<sup>Optional</sup> <a name="translate" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.translate"></a>

```typescript
public readonly translate: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#translate AwsProvider#translate}

---

##### `waf`<sup>Optional</sup> <a name="waf" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.waf"></a>

```typescript
public readonly waf: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#waf AwsProvider#waf}

---

##### `wafregional`<sup>Optional</sup> <a name="wafregional" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.wafregional"></a>

```typescript
public readonly wafregional: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wafregional AwsProvider#wafregional}

---

##### `wafv2`<sup>Optional</sup> <a name="wafv2" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.wafv2"></a>

```typescript
public readonly wafv2: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wafv2 AwsProvider#wafv2}

---

##### `wellarchitected`<sup>Optional</sup> <a name="wellarchitected" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.wellarchitected"></a>

```typescript
public readonly wellarchitected: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wellarchitected AwsProvider#wellarchitected}

---

##### `workdocs`<sup>Optional</sup> <a name="workdocs" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.workdocs"></a>

```typescript
public readonly workdocs: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workdocs AwsProvider#workdocs}

---

##### `worklink`<sup>Optional</sup> <a name="worklink" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.worklink"></a>

```typescript
public readonly worklink: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#worklink AwsProvider#worklink}

---

##### `workmail`<sup>Optional</sup> <a name="workmail" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.workmail"></a>

```typescript
public readonly workmail: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workmail AwsProvider#workmail}

---

##### `workmailmessageflow`<sup>Optional</sup> <a name="workmailmessageflow" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.workmailmessageflow"></a>

```typescript
public readonly workmailmessageflow: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workmailmessageflow AwsProvider#workmailmessageflow}

---

##### `workspaces`<sup>Optional</sup> <a name="workspaces" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.workspaces"></a>

```typescript
public readonly workspaces: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workspaces AwsProvider#workspaces}

---

##### `xray`<sup>Optional</sup> <a name="xray" id="@cdktf/aws-cdk.provider.AwsProviderEndpoints.property.xray"></a>

```typescript
public readonly xray: string;
```

- *Type:* string

Use this to override the default service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#xray AwsProvider#xray}

---

### AwsProviderIgnoreTags <a name="AwsProviderIgnoreTags" id="@cdktf/aws-cdk.provider.AwsProviderIgnoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.provider.AwsProviderIgnoreTags.Initializer"></a>

```typescript
import { provider } from '@cdktf/aws-cdk'

const awsProviderIgnoreTags: provider.AwsProviderIgnoreTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderIgnoreTags.property.keyPrefixes">keyPrefixes</a></code> | <code>string[]</code> | Resource tag key prefixes to ignore across all resources. |
| <code><a href="#@cdktf/aws-cdk.provider.AwsProviderIgnoreTags.property.keys">keys</a></code> | <code>string[]</code> | Resource tag keys to ignore across all resources. |

---

##### `keyPrefixes`<sup>Optional</sup> <a name="keyPrefixes" id="@cdktf/aws-cdk.provider.AwsProviderIgnoreTags.property.keyPrefixes"></a>

```typescript
public readonly keyPrefixes: string[];
```

- *Type:* string[]

Resource tag key prefixes to ignore across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#key_prefixes AwsProvider#key_prefixes}

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/aws-cdk.provider.AwsProviderIgnoreTags.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

Resource tag keys to ignore across all resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#keys AwsProvider#keys}

---



