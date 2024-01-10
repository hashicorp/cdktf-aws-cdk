# `cognitoUserPoolClient` Submodule <a name="`cognitoUserPoolClient` Submodule" id="@cdktf/aws-cdk.cognitoUserPoolClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolClient <a name="CognitoUserPoolClient" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client aws_cognito_user_pool_client}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

new cognitoUserPoolClient.CognitoUserPoolClient(scope: Construct, id: string, config: CognitoUserPoolClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig">CognitoUserPoolClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration">putAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits">putTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity">resetAccessTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlows">resetAllowedOauthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlowsUserPoolClient">resetAllowedOauthFlowsUserPoolClient</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthScopes">resetAllowedOauthScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration">resetAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrls">resetCallbackUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri">resetDefaultRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation">resetEnableTokenRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows">resetExplicitAuthFlows</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret">resetGenerateSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity">resetIdTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrls">resetLogoutUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors">resetPreventUserExistenceErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes">resetReadAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity">resetRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders">resetSupportedIdentityProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits">resetTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes">resetWriteAttributes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAnalyticsConfiguration` <a name="putAnalyticsConfiguration" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration"></a>

```typescript
public putAnalyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.putAnalyticsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `putTokenValidityUnits` <a name="putTokenValidityUnits" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits"></a>

```typescript
public putTokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.putTokenValidityUnits.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `resetAccessTokenValidity` <a name="resetAccessTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAccessTokenValidity"></a>

```typescript
public resetAccessTokenValidity(): void
```

##### `resetAllowedOauthFlows` <a name="resetAllowedOauthFlows" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlows"></a>

```typescript
public resetAllowedOauthFlows(): void
```

##### `resetAllowedOauthFlowsUserPoolClient` <a name="resetAllowedOauthFlowsUserPoolClient" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthFlowsUserPoolClient"></a>

```typescript
public resetAllowedOauthFlowsUserPoolClient(): void
```

##### `resetAllowedOauthScopes` <a name="resetAllowedOauthScopes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAllowedOauthScopes"></a>

```typescript
public resetAllowedOauthScopes(): void
```

##### `resetAnalyticsConfiguration` <a name="resetAnalyticsConfiguration" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetAnalyticsConfiguration"></a>

```typescript
public resetAnalyticsConfiguration(): void
```

##### `resetCallbackUrls` <a name="resetCallbackUrls" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetCallbackUrls"></a>

```typescript
public resetCallbackUrls(): void
```

##### `resetDefaultRedirectUri` <a name="resetDefaultRedirectUri" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetDefaultRedirectUri"></a>

```typescript
public resetDefaultRedirectUri(): void
```

##### `resetEnableTokenRevocation` <a name="resetEnableTokenRevocation" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetEnableTokenRevocation"></a>

```typescript
public resetEnableTokenRevocation(): void
```

##### `resetExplicitAuthFlows` <a name="resetExplicitAuthFlows" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetExplicitAuthFlows"></a>

```typescript
public resetExplicitAuthFlows(): void
```

##### `resetGenerateSecret` <a name="resetGenerateSecret" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetGenerateSecret"></a>

```typescript
public resetGenerateSecret(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdTokenValidity` <a name="resetIdTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetIdTokenValidity"></a>

```typescript
public resetIdTokenValidity(): void
```

##### `resetLogoutUrls` <a name="resetLogoutUrls" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetLogoutUrls"></a>

```typescript
public resetLogoutUrls(): void
```

##### `resetPreventUserExistenceErrors` <a name="resetPreventUserExistenceErrors" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetPreventUserExistenceErrors"></a>

```typescript
public resetPreventUserExistenceErrors(): void
```

##### `resetReadAttributes` <a name="resetReadAttributes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetReadAttributes"></a>

```typescript
public resetReadAttributes(): void
```

##### `resetRefreshTokenValidity` <a name="resetRefreshTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetRefreshTokenValidity"></a>

```typescript
public resetRefreshTokenValidity(): void
```

##### `resetSupportedIdentityProviders` <a name="resetSupportedIdentityProviders" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetSupportedIdentityProviders"></a>

```typescript
public resetSupportedIdentityProviders(): void
```

##### `resetTokenValidityUnits` <a name="resetTokenValidityUnits" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetTokenValidityUnits"></a>

```typescript
public resetTokenValidityUnits(): void
```

##### `resetWriteAttributes` <a name="resetWriteAttributes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.resetWriteAttributes"></a>

```typescript
public resetWriteAttributes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoUserPoolClient resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

cognitoUserPoolClient.CognitoUserPoolClient.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CognitoUserPoolClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CognitoUserPoolClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CognitoUserPoolClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput">accessTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsInput">allowedOauthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClientInput">allowedOauthFlowsUserPoolClientInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopesInput">allowedOauthScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput">analyticsConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrlsInput">callbackUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput">defaultRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput">enableTokenRevocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput">explicitAuthFlowsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput">generateSecretInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput">idTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrlsInput">logoutUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput">preventUserExistenceErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput">readAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput">refreshTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput">supportedIdentityProvidersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput">tokenValidityUnitsInput</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput">userPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput">writeAttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity">accessTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrls">callbackUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret">generateSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity">idTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrls">logoutUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes">readAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId">userPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes">writeAttributes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `analyticsConfiguration`<sup>Required</sup> <a name="analyticsConfiguration" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfiguration"></a>

```typescript
public readonly analyticsConfiguration: CognitoUserPoolClientAnalyticsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference">CognitoUserPoolClientAnalyticsConfigurationOutputReference</a>

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `tokenValidityUnits`<sup>Required</sup> <a name="tokenValidityUnits" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnits"></a>

```typescript
public readonly tokenValidityUnits: CognitoUserPoolClientTokenValidityUnitsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference">CognitoUserPoolClientTokenValidityUnitsOutputReference</a>

---

##### `accessTokenValidityInput`<sup>Optional</sup> <a name="accessTokenValidityInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidityInput"></a>

```typescript
public readonly accessTokenValidityInput: number;
```

- *Type:* number

---

##### `allowedOauthFlowsInput`<sup>Optional</sup> <a name="allowedOauthFlowsInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsInput"></a>

```typescript
public readonly allowedOauthFlowsInput: string[];
```

- *Type:* string[]

---

##### `allowedOauthFlowsUserPoolClientInput`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClientInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClientInput"></a>

```typescript
public readonly allowedOauthFlowsUserPoolClientInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOauthScopesInput`<sup>Optional</sup> <a name="allowedOauthScopesInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopesInput"></a>

```typescript
public readonly allowedOauthScopesInput: string[];
```

- *Type:* string[]

---

##### `analyticsConfigurationInput`<sup>Optional</sup> <a name="analyticsConfigurationInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.analyticsConfigurationInput"></a>

```typescript
public readonly analyticsConfigurationInput: CognitoUserPoolClientAnalyticsConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---

##### `callbackUrlsInput`<sup>Optional</sup> <a name="callbackUrlsInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrlsInput"></a>

```typescript
public readonly callbackUrlsInput: string[];
```

- *Type:* string[]

---

##### `defaultRedirectUriInput`<sup>Optional</sup> <a name="defaultRedirectUriInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUriInput"></a>

```typescript
public readonly defaultRedirectUriInput: string;
```

- *Type:* string

---

##### `enableTokenRevocationInput`<sup>Optional</sup> <a name="enableTokenRevocationInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocationInput"></a>

```typescript
public readonly enableTokenRevocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `explicitAuthFlowsInput`<sup>Optional</sup> <a name="explicitAuthFlowsInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlowsInput"></a>

```typescript
public readonly explicitAuthFlowsInput: string[];
```

- *Type:* string[]

---

##### `generateSecretInput`<sup>Optional</sup> <a name="generateSecretInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecretInput"></a>

```typescript
public readonly generateSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idTokenValidityInput`<sup>Optional</sup> <a name="idTokenValidityInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidityInput"></a>

```typescript
public readonly idTokenValidityInput: number;
```

- *Type:* number

---

##### `logoutUrlsInput`<sup>Optional</sup> <a name="logoutUrlsInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrlsInput"></a>

```typescript
public readonly logoutUrlsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `preventUserExistenceErrorsInput`<sup>Optional</sup> <a name="preventUserExistenceErrorsInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrorsInput"></a>

```typescript
public readonly preventUserExistenceErrorsInput: string;
```

- *Type:* string

---

##### `readAttributesInput`<sup>Optional</sup> <a name="readAttributesInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributesInput"></a>

```typescript
public readonly readAttributesInput: string[];
```

- *Type:* string[]

---

##### `refreshTokenValidityInput`<sup>Optional</sup> <a name="refreshTokenValidityInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidityInput"></a>

```typescript
public readonly refreshTokenValidityInput: number;
```

- *Type:* number

---

##### `supportedIdentityProvidersInput`<sup>Optional</sup> <a name="supportedIdentityProvidersInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProvidersInput"></a>

```typescript
public readonly supportedIdentityProvidersInput: string[];
```

- *Type:* string[]

---

##### `tokenValidityUnitsInput`<sup>Optional</sup> <a name="tokenValidityUnitsInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.tokenValidityUnitsInput"></a>

```typescript
public readonly tokenValidityUnitsInput: CognitoUserPoolClientTokenValidityUnits;
```

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolIdInput"></a>

```typescript
public readonly userPoolIdInput: string;
```

- *Type:* string

---

##### `writeAttributesInput`<sup>Optional</sup> <a name="writeAttributesInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributesInput"></a>

```typescript
public readonly writeAttributesInput: string[];
```

- *Type:* string[]

---

##### `accessTokenValidity`<sup>Required</sup> <a name="accessTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.accessTokenValidity"></a>

```typescript
public readonly accessTokenValidity: number;
```

- *Type:* number

---

##### `allowedOauthFlows`<sup>Required</sup> <a name="allowedOauthFlows" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlows"></a>

```typescript
public readonly allowedOauthFlows: string[];
```

- *Type:* string[]

---

##### `allowedOauthFlowsUserPoolClient`<sup>Required</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthFlowsUserPoolClient"></a>

```typescript
public readonly allowedOauthFlowsUserPoolClient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOauthScopes`<sup>Required</sup> <a name="allowedOauthScopes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.allowedOauthScopes"></a>

```typescript
public readonly allowedOauthScopes: string[];
```

- *Type:* string[]

---

##### `callbackUrls`<sup>Required</sup> <a name="callbackUrls" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.callbackUrls"></a>

```typescript
public readonly callbackUrls: string[];
```

- *Type:* string[]

---

##### `defaultRedirectUri`<sup>Required</sup> <a name="defaultRedirectUri" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.defaultRedirectUri"></a>

```typescript
public readonly defaultRedirectUri: string;
```

- *Type:* string

---

##### `enableTokenRevocation`<sup>Required</sup> <a name="enableTokenRevocation" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.enableTokenRevocation"></a>

```typescript
public readonly enableTokenRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `explicitAuthFlows`<sup>Required</sup> <a name="explicitAuthFlows" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.explicitAuthFlows"></a>

```typescript
public readonly explicitAuthFlows: string[];
```

- *Type:* string[]

---

##### `generateSecret`<sup>Required</sup> <a name="generateSecret" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.generateSecret"></a>

```typescript
public readonly generateSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idTokenValidity`<sup>Required</sup> <a name="idTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.idTokenValidity"></a>

```typescript
public readonly idTokenValidity: number;
```

- *Type:* number

---

##### `logoutUrls`<sup>Required</sup> <a name="logoutUrls" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.logoutUrls"></a>

```typescript
public readonly logoutUrls: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `preventUserExistenceErrors`<sup>Required</sup> <a name="preventUserExistenceErrors" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.preventUserExistenceErrors"></a>

```typescript
public readonly preventUserExistenceErrors: string;
```

- *Type:* string

---

##### `readAttributes`<sup>Required</sup> <a name="readAttributes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.readAttributes"></a>

```typescript
public readonly readAttributes: string[];
```

- *Type:* string[]

---

##### `refreshTokenValidity`<sup>Required</sup> <a name="refreshTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.refreshTokenValidity"></a>

```typescript
public readonly refreshTokenValidity: number;
```

- *Type:* number

---

##### `supportedIdentityProviders`<sup>Required</sup> <a name="supportedIdentityProviders" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.supportedIdentityProviders"></a>

```typescript
public readonly supportedIdentityProviders: string[];
```

- *Type:* string[]

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

---

##### `writeAttributes`<sup>Required</sup> <a name="writeAttributes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.writeAttributes"></a>

```typescript
public readonly writeAttributes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolClientAnalyticsConfiguration <a name="CognitoUserPoolClientAnalyticsConfiguration" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

const cognitoUserPoolClientAnalyticsConfiguration: cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn">applicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared">userDataShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}. |

---

##### `applicationArn`<sup>Optional</sup> <a name="applicationArn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#application_arn CognitoUserPoolClient#application_arn}.

---

##### `applicationId`<sup>Optional</sup> <a name="applicationId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#application_id CognitoUserPoolClient#application_id}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#external_id CognitoUserPoolClient#external_id}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#role_arn CognitoUserPoolClient#role_arn}.

---

##### `userDataShared`<sup>Optional</sup> <a name="userDataShared" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration.property.userDataShared"></a>

```typescript
public readonly userDataShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#user_data_shared CognitoUserPoolClient#user_data_shared}.

---

### CognitoUserPoolClientConfig <a name="CognitoUserPoolClientConfig" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

const cognitoUserPoolClientConfig: cognitoUserPoolClient.CognitoUserPoolClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#name CognitoUserPoolClient#name}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId">userPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity">accessTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlows">allowedOauthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient">allowedOauthFlowsUserPoolClient</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthScopes">allowedOauthScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration">analyticsConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | analytics_configuration block. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrls">callbackUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri">defaultRedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation">enableTokenRevocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows">explicitAuthFlows</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret">generateSecret</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#id CognitoUserPoolClient#id}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity">idTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrls">logoutUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors">preventUserExistenceErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes">readAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity">refreshTokenValidity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders">supportedIdentityProviders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits">tokenValidityUnits</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | token_validity_units block. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes">writeAttributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#name CognitoUserPoolClient#name}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#user_pool_id CognitoUserPoolClient#user_pool_id}.

---

##### `accessTokenValidity`<sup>Optional</sup> <a name="accessTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.accessTokenValidity"></a>

```typescript
public readonly accessTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#access_token_validity CognitoUserPoolClient#access_token_validity}.

---

##### `allowedOauthFlows`<sup>Optional</sup> <a name="allowedOauthFlows" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlows"></a>

```typescript
public readonly allowedOauthFlows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}.

---

##### `allowedOauthFlowsUserPoolClient`<sup>Optional</sup> <a name="allowedOauthFlowsUserPoolClient" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthFlowsUserPoolClient"></a>

```typescript
public readonly allowedOauthFlowsUserPoolClient: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}.

---

##### `allowedOauthScopes`<sup>Optional</sup> <a name="allowedOauthScopes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.allowedOauthScopes"></a>

```typescript
public readonly allowedOauthScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}.

---

##### `analyticsConfiguration`<sup>Optional</sup> <a name="analyticsConfiguration" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.analyticsConfiguration"></a>

```typescript
public readonly analyticsConfiguration: CognitoUserPoolClientAnalyticsConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

analytics_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#analytics_configuration CognitoUserPoolClient#analytics_configuration}

---

##### `callbackUrls`<sup>Optional</sup> <a name="callbackUrls" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.callbackUrls"></a>

```typescript
public readonly callbackUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#callback_urls CognitoUserPoolClient#callback_urls}.

---

##### `defaultRedirectUri`<sup>Optional</sup> <a name="defaultRedirectUri" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.defaultRedirectUri"></a>

```typescript
public readonly defaultRedirectUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}.

---

##### `enableTokenRevocation`<sup>Optional</sup> <a name="enableTokenRevocation" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.enableTokenRevocation"></a>

```typescript
public readonly enableTokenRevocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}.

---

##### `explicitAuthFlows`<sup>Optional</sup> <a name="explicitAuthFlows" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.explicitAuthFlows"></a>

```typescript
public readonly explicitAuthFlows: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}.

---

##### `generateSecret`<sup>Optional</sup> <a name="generateSecret" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.generateSecret"></a>

```typescript
public readonly generateSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#generate_secret CognitoUserPoolClient#generate_secret}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#id CognitoUserPoolClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idTokenValidity`<sup>Optional</sup> <a name="idTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.idTokenValidity"></a>

```typescript
public readonly idTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#id_token_validity CognitoUserPoolClient#id_token_validity}.

---

##### `logoutUrls`<sup>Optional</sup> <a name="logoutUrls" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.logoutUrls"></a>

```typescript
public readonly logoutUrls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#logout_urls CognitoUserPoolClient#logout_urls}.

---

##### `preventUserExistenceErrors`<sup>Optional</sup> <a name="preventUserExistenceErrors" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.preventUserExistenceErrors"></a>

```typescript
public readonly preventUserExistenceErrors: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}.

---

##### `readAttributes`<sup>Optional</sup> <a name="readAttributes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.readAttributes"></a>

```typescript
public readonly readAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#read_attributes CognitoUserPoolClient#read_attributes}.

---

##### `refreshTokenValidity`<sup>Optional</sup> <a name="refreshTokenValidity" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.refreshTokenValidity"></a>

```typescript
public readonly refreshTokenValidity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}.

---

##### `supportedIdentityProviders`<sup>Optional</sup> <a name="supportedIdentityProviders" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.supportedIdentityProviders"></a>

```typescript
public readonly supportedIdentityProviders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}.

---

##### `tokenValidityUnits`<sup>Optional</sup> <a name="tokenValidityUnits" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.tokenValidityUnits"></a>

```typescript
public readonly tokenValidityUnits: CognitoUserPoolClientTokenValidityUnits;
```

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

token_validity_units block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#token_validity_units CognitoUserPoolClient#token_validity_units}

---

##### `writeAttributes`<sup>Optional</sup> <a name="writeAttributes" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientConfig.property.writeAttributes"></a>

```typescript
public readonly writeAttributes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#write_attributes CognitoUserPoolClient#write_attributes}.

---

### CognitoUserPoolClientTokenValidityUnits <a name="CognitoUserPoolClientTokenValidityUnits" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

const cognitoUserPoolClientTokenValidityUnits: cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken">idToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken">refreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#access_token CognitoUserPoolClient#access_token}.

---

##### `idToken`<sup>Optional</sup> <a name="idToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#id_token CognitoUserPoolClient#id_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cognito_user_pool_client#refresh_token CognitoUserPoolClient#refresh_token}.

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoUserPoolClientAnalyticsConfigurationOutputReference <a name="CognitoUserPoolClientAnalyticsConfigurationOutputReference" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

new cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn">resetApplicationArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId">resetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared">resetUserDataShared</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationArn` <a name="resetApplicationArn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationArn"></a>

```typescript
public resetApplicationArn(): void
```

##### `resetApplicationId` <a name="resetApplicationId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetApplicationId"></a>

```typescript
public resetApplicationId(): void
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetUserDataShared` <a name="resetUserDataShared" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.resetUserDataShared"></a>

```typescript
public resetUserDataShared(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput">applicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput">userDataSharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared">userDataShared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArnInput"></a>

```typescript
public readonly applicationArnInput: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `userDataSharedInput`<sup>Optional</sup> <a name="userDataSharedInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataSharedInput"></a>

```typescript
public readonly userDataSharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `userDataShared`<sup>Required</sup> <a name="userDataShared" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.userDataShared"></a>

```typescript
public readonly userDataShared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolClientAnalyticsConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientAnalyticsConfiguration">CognitoUserPoolClientAnalyticsConfiguration</a>

---


### CognitoUserPoolClientTokenValidityUnitsOutputReference <a name="CognitoUserPoolClientTokenValidityUnitsOutputReference" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer"></a>

```typescript
import { cognitoUserPoolClient } from '@cdktf/aws-cdk'

new cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken">resetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetIdToken` <a name="resetIdToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetIdToken"></a>

```typescript
public resetIdToken(): void
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.resetRefreshToken"></a>

```typescript
public resetRefreshToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput">idTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken">idToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `idTokenInput`<sup>Optional</sup> <a name="idTokenInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idTokenInput"></a>

```typescript
public readonly idTokenInput: string;
```

- *Type:* string

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshTokenInput"></a>

```typescript
public readonly refreshTokenInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.idToken"></a>

```typescript
public readonly idToken: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CognitoUserPoolClientTokenValidityUnits;
```

- *Type:* <a href="#@cdktf/aws-cdk.cognitoUserPoolClient.CognitoUserPoolClientTokenValidityUnits">CognitoUserPoolClientTokenValidityUnits</a>

---



