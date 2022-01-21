// https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudsearchDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#multi_az CloudsearchDomain#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#name CloudsearchDomain#name}
  */
  readonly name: string;
  /**
  * endpoint_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#endpoint_options CloudsearchDomain#endpoint_options}
  */
  readonly endpointOptions?: CloudsearchDomainEndpointOptions;
  /**
  * index_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#index_field CloudsearchDomain#index_field}
  */
  readonly indexField?: CloudsearchDomainIndexField[];
  /**
  * scaling_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#scaling_parameters CloudsearchDomain#scaling_parameters}
  */
  readonly scalingParameters?: CloudsearchDomainScalingParameters;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#timeouts CloudsearchDomain#timeouts}
  */
  readonly timeouts?: CloudsearchDomainTimeouts;
}
export interface CloudsearchDomainEndpointOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#enforce_https CloudsearchDomain#enforce_https}
  */
  readonly enforceHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#tls_security_policy CloudsearchDomain#tls_security_policy}
  */
  readonly tlsSecurityPolicy?: string;
}

export function cloudsearchDomainEndpointOptionsToTerraform(struct?: CloudsearchDomainEndpointOptionsOutputReference | CloudsearchDomainEndpointOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_https: cdktf.booleanToTerraform(struct!.enforceHttps),
    tls_security_policy: cdktf.stringToTerraform(struct!.tlsSecurityPolicy),
  }
}

export class CloudsearchDomainEndpointOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudsearchDomainEndpointOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enforceHttps) {
      hasAnyValues = true;
      internalValueResult.enforceHttps = this._enforceHttps;
    }
    if (this._tlsSecurityPolicy) {
      hasAnyValues = true;
      internalValueResult.tlsSecurityPolicy = this._tlsSecurityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudsearchDomainEndpointOptions | undefined) {
    if (value === undefined) {
      this._enforceHttps = undefined;
      this._tlsSecurityPolicy = undefined;
    }
    else {
      this._enforceHttps = value.enforceHttps;
      this._tlsSecurityPolicy = value.tlsSecurityPolicy;
    }
  }

  // enforce_https - computed: true, optional: true, required: false
  private _enforceHttps?: boolean | cdktf.IResolvable; 
  public get enforceHttps() {
    return this.getBooleanAttribute('enforce_https') as any;
  }
  public set enforceHttps(value: boolean | cdktf.IResolvable) {
    this._enforceHttps = value;
  }
  public resetEnforceHttps() {
    this._enforceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHttpsInput() {
    return this._enforceHttps;
  }

  // tls_security_policy - computed: true, optional: true, required: false
  private _tlsSecurityPolicy?: string; 
  public get tlsSecurityPolicy() {
    return this.getStringAttribute('tls_security_policy');
  }
  public set tlsSecurityPolicy(value: string) {
    this._tlsSecurityPolicy = value;
  }
  public resetTlsSecurityPolicy() {
    this._tlsSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecurityPolicyInput() {
    return this._tlsSecurityPolicy;
  }
}
export interface CloudsearchDomainIndexField {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#analysis_scheme CloudsearchDomain#analysis_scheme}
  */
  readonly analysisScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#default_value CloudsearchDomain#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#facet CloudsearchDomain#facet}
  */
  readonly facet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#highlight CloudsearchDomain#highlight}
  */
  readonly highlight?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#name CloudsearchDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#return CloudsearchDomain#return}
  */
  readonly return?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#search CloudsearchDomain#search}
  */
  readonly search?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#sort CloudsearchDomain#sort}
  */
  readonly sort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#type CloudsearchDomain#type}
  */
  readonly type: string;
}

export function cloudsearchDomainIndexFieldToTerraform(struct?: CloudsearchDomainIndexField): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analysis_scheme: cdktf.stringToTerraform(struct!.analysisScheme),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    facet: cdktf.booleanToTerraform(struct!.facet),
    highlight: cdktf.booleanToTerraform(struct!.highlight),
    name: cdktf.stringToTerraform(struct!.name),
    return: cdktf.booleanToTerraform(struct!.return),
    search: cdktf.booleanToTerraform(struct!.search),
    sort: cdktf.booleanToTerraform(struct!.sort),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CloudsearchDomainScalingParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#desired_instance_type CloudsearchDomain#desired_instance_type}
  */
  readonly desiredInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#desired_partition_count CloudsearchDomain#desired_partition_count}
  */
  readonly desiredPartitionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#desired_replication_count CloudsearchDomain#desired_replication_count}
  */
  readonly desiredReplicationCount?: number;
}

export function cloudsearchDomainScalingParametersToTerraform(struct?: CloudsearchDomainScalingParametersOutputReference | CloudsearchDomainScalingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_instance_type: cdktf.stringToTerraform(struct!.desiredInstanceType),
    desired_partition_count: cdktf.numberToTerraform(struct!.desiredPartitionCount),
    desired_replication_count: cdktf.numberToTerraform(struct!.desiredReplicationCount),
  }
}

export class CloudsearchDomainScalingParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudsearchDomainScalingParameters | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._desiredInstanceType) {
      hasAnyValues = true;
      internalValueResult.desiredInstanceType = this._desiredInstanceType;
    }
    if (this._desiredPartitionCount) {
      hasAnyValues = true;
      internalValueResult.desiredPartitionCount = this._desiredPartitionCount;
    }
    if (this._desiredReplicationCount) {
      hasAnyValues = true;
      internalValueResult.desiredReplicationCount = this._desiredReplicationCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudsearchDomainScalingParameters | undefined) {
    if (value === undefined) {
      this._desiredInstanceType = undefined;
      this._desiredPartitionCount = undefined;
      this._desiredReplicationCount = undefined;
    }
    else {
      this._desiredInstanceType = value.desiredInstanceType;
      this._desiredPartitionCount = value.desiredPartitionCount;
      this._desiredReplicationCount = value.desiredReplicationCount;
    }
  }

  // desired_instance_type - computed: true, optional: true, required: false
  private _desiredInstanceType?: string; 
  public get desiredInstanceType() {
    return this.getStringAttribute('desired_instance_type');
  }
  public set desiredInstanceType(value: string) {
    this._desiredInstanceType = value;
  }
  public resetDesiredInstanceType() {
    this._desiredInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredInstanceTypeInput() {
    return this._desiredInstanceType;
  }

  // desired_partition_count - computed: true, optional: true, required: false
  private _desiredPartitionCount?: number; 
  public get desiredPartitionCount() {
    return this.getNumberAttribute('desired_partition_count');
  }
  public set desiredPartitionCount(value: number) {
    this._desiredPartitionCount = value;
  }
  public resetDesiredPartitionCount() {
    this._desiredPartitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPartitionCountInput() {
    return this._desiredPartitionCount;
  }

  // desired_replication_count - computed: true, optional: true, required: false
  private _desiredReplicationCount?: number; 
  public get desiredReplicationCount() {
    return this.getNumberAttribute('desired_replication_count');
  }
  public set desiredReplicationCount(value: number) {
    this._desiredReplicationCount = value;
  }
  public resetDesiredReplicationCount() {
    this._desiredReplicationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredReplicationCountInput() {
    return this._desiredReplicationCount;
  }
}
export interface CloudsearchDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#create CloudsearchDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#delete CloudsearchDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html#update CloudsearchDomain#update}
  */
  readonly update?: string;
}

export function cloudsearchDomainTimeoutsToTerraform(struct?: CloudsearchDomainTimeoutsOutputReference | CloudsearchDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CloudsearchDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudsearchDomainTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudsearchDomainTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html aws_cloudsearch_domain}
*/
export class CloudsearchDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudsearch_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain.html aws_cloudsearch_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudsearchDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CloudsearchDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudsearch_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._endpointOptions.internalValue = config.endpointOptions;
    this._indexField = config.indexField;
    this._scalingParameters.internalValue = config.scalingParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // document_service_endpoint - computed: true, optional: false, required: false
  public get documentServiceEndpoint() {
    return this.getStringAttribute('document_service_endpoint');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az') as any;
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // search_service_endpoint - computed: true, optional: false, required: false
  public get searchServiceEndpoint() {
    return this.getStringAttribute('search_service_endpoint');
  }

  // endpoint_options - computed: false, optional: true, required: false
  private _endpointOptions = new CloudsearchDomainEndpointOptionsOutputReference(this as any, "endpoint_options", true);
  public get endpointOptions() {
    return this._endpointOptions;
  }
  public putEndpointOptions(value: CloudsearchDomainEndpointOptions) {
    this._endpointOptions.internalValue = value;
  }
  public resetEndpointOptions() {
    this._endpointOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointOptionsInput() {
    return this._endpointOptions.internalValue;
  }

  // index_field - computed: false, optional: true, required: false
  private _indexField?: CloudsearchDomainIndexField[]; 
  public get indexField() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('index_field') as any;
  }
  public set indexField(value: CloudsearchDomainIndexField[]) {
    this._indexField = value;
  }
  public resetIndexField() {
    this._indexField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldInput() {
    return this._indexField;
  }

  // scaling_parameters - computed: false, optional: true, required: false
  private _scalingParameters = new CloudsearchDomainScalingParametersOutputReference(this as any, "scaling_parameters", true);
  public get scalingParameters() {
    return this._scalingParameters;
  }
  public putScalingParameters(value: CloudsearchDomainScalingParameters) {
    this._scalingParameters.internalValue = value;
  }
  public resetScalingParameters() {
    this._scalingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingParametersInput() {
    return this._scalingParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudsearchDomainTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudsearchDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      endpoint_options: cloudsearchDomainEndpointOptionsToTerraform(this._endpointOptions.internalValue),
      index_field: cdktf.listMapper(cloudsearchDomainIndexFieldToTerraform)(this._indexField),
      scaling_parameters: cloudsearchDomainScalingParametersToTerraform(this._scalingParameters.internalValue),
      timeouts: cloudsearchDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
