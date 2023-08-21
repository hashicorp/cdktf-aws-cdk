# `aws_service_discovery_service`

Refer to the Terraform Registory for docs: [`aws_service_discovery_service`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service).

# `serviceDiscoveryService` Submodule <a name="`serviceDiscoveryService` Submodule" id="@cdktf/aws-cdk.serviceDiscoveryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryService <a name="ServiceDiscoveryService" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service aws_service_discovery_service}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

new serviceDiscoveryService.ServiceDiscoveryService(scope: Construct, id: string, config: ServiceDiscoveryServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig">ServiceDiscoveryServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig">ServiceDiscoveryServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig">putDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig">putHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig">putHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetDnsConfig">resetDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckConfig">resetHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckCustomConfig">resetHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetNamespaceId">resetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDnsConfig` <a name="putDnsConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig"></a>

```typescript
public putDnsConfig(value: ServiceDiscoveryServiceDnsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

---

##### `putHealthCheckConfig` <a name="putHealthCheckConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig"></a>

```typescript
public putHealthCheckConfig(value: ServiceDiscoveryServiceHealthCheckConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

---

##### `putHealthCheckCustomConfig` <a name="putHealthCheckCustomConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig"></a>

```typescript
public putHealthCheckCustomConfig(value: ServiceDiscoveryServiceHealthCheckCustomConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDnsConfig` <a name="resetDnsConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetDnsConfig"></a>

```typescript
public resetDnsConfig(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetHealthCheckConfig` <a name="resetHealthCheckConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckConfig"></a>

```typescript
public resetHealthCheckConfig(): void
```

##### `resetHealthCheckCustomConfig` <a name="resetHealthCheckCustomConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckCustomConfig"></a>

```typescript
public resetHealthCheckCustomConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespaceId` <a name="resetNamespaceId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetNamespaceId"></a>

```typescript
public resetNamespaceId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isConstruct"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

serviceDiscoveryService.ServiceDiscoveryService.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference">ServiceDiscoveryServiceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference">ServiceDiscoveryServiceHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfig">healthCheckCustomConfig</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference">ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfigInput">dnsConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfigInput">healthCheckConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfigInput">healthCheckCustomConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dnsConfig`<sup>Required</sup> <a name="dnsConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ServiceDiscoveryServiceDnsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference">ServiceDiscoveryServiceDnsConfigOutputReference</a>

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: ServiceDiscoveryServiceHealthCheckConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference">ServiceDiscoveryServiceHealthCheckConfigOutputReference</a>

---

##### `healthCheckCustomConfig`<sup>Required</sup> <a name="healthCheckCustomConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfig"></a>

```typescript
public readonly healthCheckCustomConfig: ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference">ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dnsConfigInput`<sup>Optional</sup> <a name="dnsConfigInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfigInput"></a>

```typescript
public readonly dnsConfigInput: ServiceDiscoveryServiceDnsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckConfigInput`<sup>Optional</sup> <a name="healthCheckConfigInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfigInput"></a>

```typescript
public readonly healthCheckConfigInput: ServiceDiscoveryServiceHealthCheckConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

---

##### `healthCheckCustomConfigInput`<sup>Optional</sup> <a name="healthCheckCustomConfigInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfigInput"></a>

```typescript
public readonly healthCheckCustomConfigInput: ServiceDiscoveryServiceHealthCheckCustomConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryServiceConfig <a name="ServiceDiscoveryServiceConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

const serviceDiscoveryServiceConfig: serviceDiscoveryService.ServiceDiscoveryServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#name ServiceDiscoveryService#name}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#description ServiceDiscoveryService#description}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dnsConfig">dnsConfig</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | health_check_config block. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckCustomConfig">healthCheckCustomConfig</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | health_check_custom_config block. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#id ServiceDiscoveryService#id}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#tags ServiceDiscoveryService#tags}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#name ServiceDiscoveryService#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#description ServiceDiscoveryService#description}.

---

##### `dnsConfig`<sup>Optional</sup> <a name="dnsConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dnsConfig"></a>

```typescript
public readonly dnsConfig: ServiceDiscoveryServiceDnsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#dns_config ServiceDiscoveryService#dns_config}

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}.

---

##### `healthCheckConfig`<sup>Optional</sup> <a name="healthCheckConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: ServiceDiscoveryServiceHealthCheckConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

health_check_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#health_check_config ServiceDiscoveryService#health_check_config}

---

##### `healthCheckCustomConfig`<sup>Optional</sup> <a name="healthCheckCustomConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckCustomConfig"></a>

```typescript
public readonly healthCheckCustomConfig: ServiceDiscoveryServiceHealthCheckCustomConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

health_check_custom_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#id ServiceDiscoveryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#tags ServiceDiscoveryService#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}.

---

### ServiceDiscoveryServiceDnsConfig <a name="ServiceDiscoveryServiceDnsConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

const serviceDiscoveryServiceDnsConfig: serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.dnsRecords">dnsRecords</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>[]</code> | dns_records block. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.namespaceId">namespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.routingPolicy">routingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}. |

---

##### `dnsRecords`<sup>Required</sup> <a name="dnsRecords" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.dnsRecords"></a>

```typescript
public readonly dnsRecords: IResolvable | ServiceDiscoveryServiceDnsConfigDnsRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>[]

dns_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#dns_records ServiceDiscoveryService#dns_records}

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}.

---

##### `routingPolicy`<sup>Optional</sup> <a name="routingPolicy" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}.

---

### ServiceDiscoveryServiceDnsConfigDnsRecords <a name="ServiceDiscoveryServiceDnsConfigDnsRecords" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

const serviceDiscoveryServiceDnsConfigDnsRecords: serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.ttl">ttl</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#ttl ServiceDiscoveryService#ttl}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#ttl ServiceDiscoveryService#ttl}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#type ServiceDiscoveryService#type}.

---

### ServiceDiscoveryServiceHealthCheckConfig <a name="ServiceDiscoveryServiceHealthCheckConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

const serviceDiscoveryServiceHealthCheckConfig: serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.resourcePath">resourcePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#type ServiceDiscoveryService#type}.

---

### ServiceDiscoveryServiceHealthCheckCustomConfig <a name="ServiceDiscoveryServiceHealthCheckCustomConfig" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

const serviceDiscoveryServiceHealthCheckCustomConfig: serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}. |

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDiscoveryServiceDnsConfigDnsRecordsList <a name="ServiceDiscoveryServiceDnsConfigDnsRecordsList" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

new serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get"></a>

```typescript
public get(index: number): ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServiceDiscoveryServiceDnsConfigDnsRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>[]

---


### ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference <a name="ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

new serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceDiscoveryServiceDnsConfigDnsRecords | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a> | cdktf.IResolvable

---


### ServiceDiscoveryServiceDnsConfigOutputReference <a name="ServiceDiscoveryServiceDnsConfigOutputReference" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

new serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords">putDnsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resetRoutingPolicy">resetRoutingPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDnsRecords` <a name="putDnsRecords" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords"></a>

```typescript
public putDnsRecords(value: IResolvable | ServiceDiscoveryServiceDnsConfigDnsRecords[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>[]

---

##### `resetRoutingPolicy` <a name="resetRoutingPolicy" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resetRoutingPolicy"></a>

```typescript
public resetRoutingPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecords">dnsRecords</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList">ServiceDiscoveryServiceDnsConfigDnsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput">dnsRecordsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceIdInput">namespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicyInput">routingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicy">routingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsRecords`<sup>Required</sup> <a name="dnsRecords" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecords"></a>

```typescript
public readonly dnsRecords: ServiceDiscoveryServiceDnsConfigDnsRecordsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList">ServiceDiscoveryServiceDnsConfigDnsRecordsList</a>

---

##### `dnsRecordsInput`<sup>Optional</sup> <a name="dnsRecordsInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput"></a>

```typescript
public readonly dnsRecordsInput: IResolvable | ServiceDiscoveryServiceDnsConfigDnsRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>[]

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceIdInput"></a>

```typescript
public readonly namespaceIdInput: string;
```

- *Type:* string

---

##### `routingPolicyInput`<sup>Optional</sup> <a name="routingPolicyInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicyInput"></a>

```typescript
public readonly routingPolicyInput: string;
```

- *Type:* string

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `routingPolicy`<sup>Required</sup> <a name="routingPolicy" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicy"></a>

```typescript
public readonly routingPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceDiscoveryServiceDnsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

---


### ServiceDiscoveryServiceHealthCheckConfigOutputReference <a name="ServiceDiscoveryServiceHealthCheckConfigOutputReference" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

new serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetResourcePath"></a>

```typescript
public resetResourcePath(): void
```

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput">resourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePath">resourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```typescript
public readonly resourcePathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePath"></a>

```typescript
public readonly resourcePath: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceDiscoveryServiceHealthCheckConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

---


### ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference <a name="ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer"></a>

```typescript
import { serviceDiscoveryService } from '@cdktf/aws-cdk'

new serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServiceDiscoveryServiceHealthCheckCustomConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

---



