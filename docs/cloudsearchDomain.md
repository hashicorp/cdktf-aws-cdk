# `cloudsearchDomain` Submodule <a name="`cloudsearchDomain` Submodule" id="@cdktf/aws-cdk.cloudsearchDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudsearchDomain <a name="CloudsearchDomain" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain aws_cloudsearch_domain}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

new cloudsearchDomain.CloudsearchDomain(scope: Construct, id: string, config: CloudsearchDomainConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig">CloudsearchDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig">CloudsearchDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putEndpointOptions">putEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putIndexField">putIndexField</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putScalingParameters">putScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetEndpointOptions">resetEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetIndexField">resetIndexField</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetMultiAz">resetMultiAz</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetScalingParameters">resetScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointOptions` <a name="putEndpointOptions" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putEndpointOptions"></a>

```typescript
public putEndpointOptions(value: CloudsearchDomainEndpointOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putEndpointOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---

##### `putIndexField` <a name="putIndexField" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putIndexField"></a>

```typescript
public putIndexField(value: IResolvable | CloudsearchDomainIndexField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putIndexField.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>[]

---

##### `putScalingParameters` <a name="putScalingParameters" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putScalingParameters"></a>

```typescript
public putScalingParameters(value: CloudsearchDomainScalingParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putScalingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudsearchDomainTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

---

##### `resetEndpointOptions` <a name="resetEndpointOptions" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetEndpointOptions"></a>

```typescript
public resetEndpointOptions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIndexField` <a name="resetIndexField" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetIndexField"></a>

```typescript
public resetIndexField(): void
```

##### `resetMultiAz` <a name="resetMultiAz" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetMultiAz"></a>

```typescript
public resetMultiAz(): void
```

##### `resetScalingParameters` <a name="resetScalingParameters" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetScalingParameters"></a>

```typescript
public resetScalingParameters(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudsearchDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isConstruct"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

cloudsearchDomain.CloudsearchDomain.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isTerraformElement"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

cloudsearchDomain.CloudsearchDomain.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isTerraformResource"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

cloudsearchDomain.CloudsearchDomain.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.generateConfigForImport"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

cloudsearchDomain.CloudsearchDomain.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudsearchDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudsearchDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudsearchDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudsearchDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.documentServiceEndpoint">documentServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.endpointOptions">endpointOptions</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference">CloudsearchDomainEndpointOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.indexField">indexField</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList">CloudsearchDomainIndexFieldList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.scalingParameters">scalingParameters</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference">CloudsearchDomainScalingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.searchServiceEndpoint">searchServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference">CloudsearchDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.endpointOptionsInput">endpointOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.indexFieldInput">indexFieldInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.multiAzInput">multiAzInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.scalingParametersInput">scalingParametersInput</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.multiAz">multiAz</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `documentServiceEndpoint`<sup>Required</sup> <a name="documentServiceEndpoint" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.documentServiceEndpoint"></a>

```typescript
public readonly documentServiceEndpoint: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `endpointOptions`<sup>Required</sup> <a name="endpointOptions" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.endpointOptions"></a>

```typescript
public readonly endpointOptions: CloudsearchDomainEndpointOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference">CloudsearchDomainEndpointOptionsOutputReference</a>

---

##### `indexField`<sup>Required</sup> <a name="indexField" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.indexField"></a>

```typescript
public readonly indexField: CloudsearchDomainIndexFieldList;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList">CloudsearchDomainIndexFieldList</a>

---

##### `scalingParameters`<sup>Required</sup> <a name="scalingParameters" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.scalingParameters"></a>

```typescript
public readonly scalingParameters: CloudsearchDomainScalingParametersOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference">CloudsearchDomainScalingParametersOutputReference</a>

---

##### `searchServiceEndpoint`<sup>Required</sup> <a name="searchServiceEndpoint" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.searchServiceEndpoint"></a>

```typescript
public readonly searchServiceEndpoint: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.timeouts"></a>

```typescript
public readonly timeouts: CloudsearchDomainTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference">CloudsearchDomainTimeoutsOutputReference</a>

---

##### `endpointOptionsInput`<sup>Optional</sup> <a name="endpointOptionsInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.endpointOptionsInput"></a>

```typescript
public readonly endpointOptionsInput: CloudsearchDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexFieldInput`<sup>Optional</sup> <a name="indexFieldInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.indexFieldInput"></a>

```typescript
public readonly indexFieldInput: IResolvable | CloudsearchDomainIndexField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>[]

---

##### `multiAzInput`<sup>Optional</sup> <a name="multiAzInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.multiAzInput"></a>

```typescript
public readonly multiAzInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scalingParametersInput`<sup>Optional</sup> <a name="scalingParametersInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.scalingParametersInput"></a>

```typescript
public readonly scalingParametersInput: CloudsearchDomainScalingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudsearchDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomain.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudsearchDomainConfig <a name="CloudsearchDomainConfig" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

const cloudsearchDomainConfig: cloudsearchDomain.CloudsearchDomainConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.endpointOptions">endpointOptions</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | endpoint_options block. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#id CloudsearchDomain#id}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.indexField">indexField</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>[]</code> | index_field block. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.multiAz">multiAz</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.scalingParameters">scalingParameters</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | scaling_parameters block. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `endpointOptions`<sup>Optional</sup> <a name="endpointOptions" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.endpointOptions"></a>

```typescript
public readonly endpointOptions: CloudsearchDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

endpoint_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#endpoint_options CloudsearchDomain#endpoint_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#id CloudsearchDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `indexField`<sup>Optional</sup> <a name="indexField" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.indexField"></a>

```typescript
public readonly indexField: IResolvable | CloudsearchDomainIndexField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>[]

index_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#index_field CloudsearchDomain#index_field}

---

##### `multiAz`<sup>Optional</sup> <a name="multiAz" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.multiAz"></a>

```typescript
public readonly multiAz: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}.

---

##### `scalingParameters`<sup>Optional</sup> <a name="scalingParameters" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.scalingParameters"></a>

```typescript
public readonly scalingParameters: CloudsearchDomainScalingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

scaling_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#scaling_parameters CloudsearchDomain#scaling_parameters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudsearchDomainTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#timeouts CloudsearchDomain#timeouts}

---

### CloudsearchDomainEndpointOptions <a name="CloudsearchDomainEndpointOptions" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

const cloudsearchDomainEndpointOptions: cloudsearchDomain.CloudsearchDomainEndpointOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.enforceHttps">enforceHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}. |

---

##### `enforceHttps`<sup>Optional</sup> <a name="enforceHttps" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.enforceHttps"></a>

```typescript
public readonly enforceHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}.

---

##### `tlsSecurityPolicy`<sup>Optional</sup> <a name="tlsSecurityPolicy" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions.property.tlsSecurityPolicy"></a>

```typescript
public readonly tlsSecurityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}.

---

### CloudsearchDomainIndexField <a name="CloudsearchDomainIndexField" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

const cloudsearchDomainIndexField: cloudsearchDomain.CloudsearchDomainIndexField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#name CloudsearchDomain#name}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#type CloudsearchDomain#type}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.analysisScheme">analysisScheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#default_value CloudsearchDomain#default_value}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.facet">facet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#facet CloudsearchDomain#facet}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.highlight">highlight</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#highlight CloudsearchDomain#highlight}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.return">return</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#return CloudsearchDomain#return}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.search">search</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#search CloudsearchDomain#search}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.sort">sort</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#sort CloudsearchDomain#sort}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#name CloudsearchDomain#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#type CloudsearchDomain#type}.

---

##### `analysisScheme`<sup>Optional</sup> <a name="analysisScheme" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.analysisScheme"></a>

```typescript
public readonly analysisScheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}.

---

##### `defaultValue`<sup>Optional</sup> <a name="defaultValue" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#default_value CloudsearchDomain#default_value}.

---

##### `facet`<sup>Optional</sup> <a name="facet" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.facet"></a>

```typescript
public readonly facet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#facet CloudsearchDomain#facet}.

---

##### `highlight`<sup>Optional</sup> <a name="highlight" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.highlight"></a>

```typescript
public readonly highlight: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#highlight CloudsearchDomain#highlight}.

---

##### `return`<sup>Optional</sup> <a name="return" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.return"></a>

```typescript
public readonly return: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#return CloudsearchDomain#return}.

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.search"></a>

```typescript
public readonly search: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#search CloudsearchDomain#search}.

---

##### `sort`<sup>Optional</sup> <a name="sort" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField.property.sort"></a>

```typescript
public readonly sort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#sort CloudsearchDomain#sort}.

---

### CloudsearchDomainScalingParameters <a name="CloudsearchDomainScalingParameters" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

const cloudsearchDomainScalingParameters: cloudsearchDomain.CloudsearchDomainScalingParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredInstanceType">desiredInstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredPartitionCount">desiredPartitionCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredReplicationCount">desiredReplicationCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}. |

---

##### `desiredInstanceType`<sup>Optional</sup> <a name="desiredInstanceType" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredInstanceType"></a>

```typescript
public readonly desiredInstanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}.

---

##### `desiredPartitionCount`<sup>Optional</sup> <a name="desiredPartitionCount" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredPartitionCount"></a>

```typescript
public readonly desiredPartitionCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}.

---

##### `desiredReplicationCount`<sup>Optional</sup> <a name="desiredReplicationCount" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters.property.desiredReplicationCount"></a>

```typescript
public readonly desiredReplicationCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}.

---

### CloudsearchDomainTimeouts <a name="CloudsearchDomainTimeouts" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

const cloudsearchDomainTimeouts: cloudsearchDomain.CloudsearchDomainTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#create CloudsearchDomain#create}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#delete CloudsearchDomain#delete}. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#update CloudsearchDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#create CloudsearchDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#delete CloudsearchDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudsearch_domain#update CloudsearchDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudsearchDomainEndpointOptionsOutputReference <a name="CloudsearchDomainEndpointOptionsOutputReference" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

new cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetEnforceHttps">resetEnforceHttps</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy">resetTlsSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnforceHttps` <a name="resetEnforceHttps" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetEnforceHttps"></a>

```typescript
public resetEnforceHttps(): void
```

##### `resetTlsSecurityPolicy` <a name="resetTlsSecurityPolicy" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.resetTlsSecurityPolicy"></a>

```typescript
public resetTlsSecurityPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttpsInput">enforceHttpsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput">tlsSecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttps">enforceHttps</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy">tlsSecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enforceHttpsInput`<sup>Optional</sup> <a name="enforceHttpsInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttpsInput"></a>

```typescript
public readonly enforceHttpsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsSecurityPolicyInput`<sup>Optional</sup> <a name="tlsSecurityPolicyInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicyInput"></a>

```typescript
public readonly tlsSecurityPolicyInput: string;
```

- *Type:* string

---

##### `enforceHttps`<sup>Required</sup> <a name="enforceHttps" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.enforceHttps"></a>

```typescript
public readonly enforceHttps: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsSecurityPolicy`<sup>Required</sup> <a name="tlsSecurityPolicy" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.tlsSecurityPolicy"></a>

```typescript
public readonly tlsSecurityPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudsearchDomainEndpointOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainEndpointOptions">CloudsearchDomainEndpointOptions</a>

---


### CloudsearchDomainIndexFieldList <a name="CloudsearchDomainIndexFieldList" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

new cloudsearchDomain.CloudsearchDomainIndexFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.get"></a>

```typescript
public get(index: number): CloudsearchDomainIndexFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudsearchDomainIndexField[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>[]

---


### CloudsearchDomainIndexFieldOutputReference <a name="CloudsearchDomainIndexFieldOutputReference" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

new cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetAnalysisScheme">resetAnalysisScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetDefaultValue">resetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetFacet">resetFacet</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetHighlight">resetHighlight</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetReturn">resetReturn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSort">resetSort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnalysisScheme` <a name="resetAnalysisScheme" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetAnalysisScheme"></a>

```typescript
public resetAnalysisScheme(): void
```

##### `resetDefaultValue` <a name="resetDefaultValue" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetDefaultValue"></a>

```typescript
public resetDefaultValue(): void
```

##### `resetFacet` <a name="resetFacet" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetFacet"></a>

```typescript
public resetFacet(): void
```

##### `resetHighlight` <a name="resetHighlight" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetHighlight"></a>

```typescript
public resetHighlight(): void
```

##### `resetReturn` <a name="resetReturn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetReturn"></a>

```typescript
public resetReturn(): void
```

##### `resetSearch` <a name="resetSearch" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSearch"></a>

```typescript
public resetSearch(): void
```

##### `resetSort` <a name="resetSort" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.resetSort"></a>

```typescript
public resetSort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisSchemeInput">analysisSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facetInput">facetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlightInput">highlightInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.returnInput">returnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.searchInput">searchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sortInput">sortInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisScheme">analysisScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facet">facet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlight">highlight</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.return">return</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.search">search</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sort">sort</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `analysisSchemeInput`<sup>Optional</sup> <a name="analysisSchemeInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisSchemeInput"></a>

```typescript
public readonly analysisSchemeInput: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `facetInput`<sup>Optional</sup> <a name="facetInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facetInput"></a>

```typescript
public readonly facetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `highlightInput`<sup>Optional</sup> <a name="highlightInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlightInput"></a>

```typescript
public readonly highlightInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `returnInput`<sup>Optional</sup> <a name="returnInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.returnInput"></a>

```typescript
public readonly returnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.searchInput"></a>

```typescript
public readonly searchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sortInput`<sup>Optional</sup> <a name="sortInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sortInput"></a>

```typescript
public readonly sortInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `analysisScheme`<sup>Required</sup> <a name="analysisScheme" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.analysisScheme"></a>

```typescript
public readonly analysisScheme: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `facet`<sup>Required</sup> <a name="facet" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.facet"></a>

```typescript
public readonly facet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `highlight`<sup>Required</sup> <a name="highlight" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.highlight"></a>

```typescript
public readonly highlight: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `return`<sup>Required</sup> <a name="return" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.return"></a>

```typescript
public readonly return: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.search"></a>

```typescript
public readonly search: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sort`<sup>Required</sup> <a name="sort" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.sort"></a>

```typescript
public readonly sort: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudsearchDomainIndexField;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainIndexField">CloudsearchDomainIndexField</a>

---


### CloudsearchDomainScalingParametersOutputReference <a name="CloudsearchDomainScalingParametersOutputReference" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

new cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredInstanceType">resetDesiredInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredPartitionCount">resetDesiredPartitionCount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredReplicationCount">resetDesiredReplicationCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDesiredInstanceType` <a name="resetDesiredInstanceType" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredInstanceType"></a>

```typescript
public resetDesiredInstanceType(): void
```

##### `resetDesiredPartitionCount` <a name="resetDesiredPartitionCount" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredPartitionCount"></a>

```typescript
public resetDesiredPartitionCount(): void
```

##### `resetDesiredReplicationCount` <a name="resetDesiredReplicationCount" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.resetDesiredReplicationCount"></a>

```typescript
public resetDesiredReplicationCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceTypeInput">desiredInstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCountInput">desiredPartitionCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCountInput">desiredReplicationCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceType">desiredInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCount">desiredPartitionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCount">desiredReplicationCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredInstanceTypeInput`<sup>Optional</sup> <a name="desiredInstanceTypeInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceTypeInput"></a>

```typescript
public readonly desiredInstanceTypeInput: string;
```

- *Type:* string

---

##### `desiredPartitionCountInput`<sup>Optional</sup> <a name="desiredPartitionCountInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCountInput"></a>

```typescript
public readonly desiredPartitionCountInput: number;
```

- *Type:* number

---

##### `desiredReplicationCountInput`<sup>Optional</sup> <a name="desiredReplicationCountInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCountInput"></a>

```typescript
public readonly desiredReplicationCountInput: number;
```

- *Type:* number

---

##### `desiredInstanceType`<sup>Required</sup> <a name="desiredInstanceType" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredInstanceType"></a>

```typescript
public readonly desiredInstanceType: string;
```

- *Type:* string

---

##### `desiredPartitionCount`<sup>Required</sup> <a name="desiredPartitionCount" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredPartitionCount"></a>

```typescript
public readonly desiredPartitionCount: number;
```

- *Type:* number

---

##### `desiredReplicationCount`<sup>Required</sup> <a name="desiredReplicationCount" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.desiredReplicationCount"></a>

```typescript
public readonly desiredReplicationCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudsearchDomainScalingParameters;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainScalingParameters">CloudsearchDomainScalingParameters</a>

---


### CloudsearchDomainTimeoutsOutputReference <a name="CloudsearchDomainTimeoutsOutputReference" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudsearchDomain } from '@cdktf/aws-cdk'

new cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudsearchDomainTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudsearchDomain.CloudsearchDomainTimeouts">CloudsearchDomainTimeouts</a>

---



