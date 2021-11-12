// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Mesh
*/
export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_name AppmeshRoute#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_owner AppmeshRoute#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags AppmeshRoute#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags_all AppmeshRoute#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_router_name AppmeshRoute#virtual_router_name}
  */
  readonly virtualRouterName: string;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#spec AppmeshRoute#spec}
  */
  readonly spec: AppmeshRouteSpec;
}
export interface AppmeshRouteSpecGrpcRouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
  */
  readonly weight: number;
}

export function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionWeightedTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AppmeshRouteSpecGrpcRouteAction {
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
}

export function appmeshRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionOutputReference | AppmeshRouteSpecGrpcRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export class AppmeshRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget?: AppmeshRouteSpecGrpcRouteActionWeightedTarget[]; 
  public get weightedTarget() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_target') as any;
  }
  public set weightedTarget(value: AppmeshRouteSpecGrpcRouteActionWeightedTarget[]) {
    this._weightedTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget
  }
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
  */
  readonly start: number;
}

export function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export class AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start
  }
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
  */
  readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
}

export function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct!.range),
  }
}

export class AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string | undefined; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string | undefined) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string | undefined; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string | undefined; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string | undefined) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string | undefined; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string | undefined) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix
  }

  // range - computed: false, optional: true, required: false
  private _range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined; 
  private __rangeOutput = new AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference(this as any, "range", true);
  public get range() {
    return this.__rangeOutput;
  }
  public putRange(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadata {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch;
}

export function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct!.match),
  }
}

export interface AppmeshRouteSpecGrpcRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method_name AppmeshRoute#method_name}
  */
  readonly methodName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#service_name AppmeshRoute#service_name}
  */
  readonly serviceName?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#metadata AppmeshRoute#metadata}
  */
  readonly metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[];
}

export function appmeshRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchOutputReference | AppmeshRouteSpecGrpcRouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method_name: cdktf.stringToTerraform(struct!.methodName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    metadata: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataToTerraform)(struct!.metadata),
  }
}

export class AppmeshRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // method_name - computed: false, optional: true, required: false
  private _methodName?: string | undefined; 
  public get methodName() {
    return this.getStringAttribute('method_name');
  }
  public set methodName(value: string | undefined) {
    this._methodName = value;
  }
  public resetMethodName() {
    this._methodName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodNameInput() {
    return this._methodName
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string | undefined; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string | undefined; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string | undefined) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[] | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: AppmeshRouteSpecGrpcRouteMatchMetadata[] | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_retry_events AppmeshRoute#grpc_retry_events}
  */
  readonly grpcRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
}

export function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.grpcRetryEvents),
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
    per_retry_timeout: appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
  }
}

export class AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // grpc_retry_events - computed: false, optional: true, required: false
  private _grpcRetryEvents?: string[] | undefined; 
  public get grpcRetryEvents() {
    return this.getListAttribute('grpc_retry_events');
  }
  public set grpcRetryEvents(value: string[] | undefined) {
    this._grpcRetryEvents = value;
  }
  public resetGrpcRetryEvents() {
    this._grpcRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRetryEventsInput() {
    return this._grpcRetryEvents
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[] | undefined; 
  public get httpRetryEvents() {
    return this.getListAttribute('http_retry_events');
  }
  public set httpRetryEvents(value: string[] | undefined) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[] | undefined; 
  public get tcpRetryEvents() {
    return this.getListAttribute('tcp_retry_events');
  }
  public set tcpRetryEvents(value: string[] | undefined) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout; 
  private __perRetryTimeoutOutput = new AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(this as any, "per_retry_timeout", true);
  public get perRetryTimeout() {
    return this.__perRetryTimeoutOutput;
  }
  public putPerRetryTimeout(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout
  }
}
export interface AppmeshRouteSpecGrpcRouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference | AppmeshRouteSpecGrpcRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecGrpcRouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecGrpcRouteTimeout {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
  */
  readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
}

export function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutOutputReference | AppmeshRouteSpecGrpcRouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct!.idle),
    per_request: appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshRouteSpecGrpcRouteTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined; 
  private __idleOutput = new AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference(this as any, "idle", true);
  public get idle() {
    return this.__idleOutput;
  }
  public putIdle(value: AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined; 
  private __perRequestOutput = new AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference(this as any, "per_request", true);
  public get perRequest() {
    return this.__perRequestOutput;
  }
  public putPerRequest(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined) {
    this._perRequest = value;
  }
  public resetPerRequest() {
    this._perRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest
  }
}
export interface AppmeshRouteSpecGrpcRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecGrpcRouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecGrpcRouteMatch;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
  */
  readonly timeout?: AppmeshRouteSpecGrpcRouteTimeout;
}

export function appmeshRouteSpecGrpcRouteToTerraform(struct?: AppmeshRouteSpecGrpcRouteOutputReference | AppmeshRouteSpecGrpcRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshRouteSpecGrpcRouteActionToTerraform(struct!.action),
    match: appmeshRouteSpecGrpcRouteMatchToTerraform(struct!.match),
    retry_policy: appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct!.timeout),
  }
}

export class AppmeshRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action - computed: false, optional: false, required: true
  private _action?: AppmeshRouteSpecGrpcRouteAction; 
  private __actionOutput = new AppmeshRouteSpecGrpcRouteActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: AppmeshRouteSpecGrpcRouteAction) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // match - computed: false, optional: true, required: false
  private _match?: AppmeshRouteSpecGrpcRouteMatch | undefined; 
  private __matchOutput = new AppmeshRouteSpecGrpcRouteMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshRouteSpecGrpcRouteMatch | undefined) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy | undefined; 
  private __retryPolicyOutput = new AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this.__retryPolicyOutput;
  }
  public putRetryPolicy(value: AppmeshRouteSpecGrpcRouteRetryPolicy | undefined) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: AppmeshRouteSpecGrpcRouteTimeout | undefined; 
  private __timeoutOutput = new AppmeshRouteSpecGrpcRouteTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: AppmeshRouteSpecGrpcRouteTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface AppmeshRouteSpecHttp2RouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
  */
  readonly weight: number;
}

export function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionWeightedTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AppmeshRouteSpecHttp2RouteAction {
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
}

export function appmeshRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionOutputReference | AppmeshRouteSpecHttp2RouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export class AppmeshRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget?: AppmeshRouteSpecHttp2RouteActionWeightedTarget[]; 
  public get weightedTarget() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_target') as any;
  }
  public set weightedTarget(value: AppmeshRouteSpecHttp2RouteActionWeightedTarget[]) {
    this._weightedTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget
  }
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
  */
  readonly start: number;
}

export function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export class AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start
  }
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
  */
  readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
}

export function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct!.range),
  }
}

export class AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string | undefined; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string | undefined) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string | undefined; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string | undefined; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string | undefined) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string | undefined; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string | undefined) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix
  }

  // range - computed: false, optional: true, required: false
  private _range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined; 
  private __rangeOutput = new AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference(this as any, "range", true);
  public get range() {
    return this.__rangeOutput;
  }
  public putRange(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }
}
export interface AppmeshRouteSpecHttp2RouteMatchHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch;
}

export function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct!.match),
  }
}

export interface AppmeshRouteSpecHttp2RouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}
  */
  readonly scheme?: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
  */
  readonly header?: AppmeshRouteSpecHttp2RouteMatchHeader[];
}

export function appmeshRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchOutputReference | AppmeshRouteSpecHttp2RouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    header: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderToTerraform)(struct!.header),
  }
}

export class AppmeshRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // method - computed: false, optional: true, required: false
  private _method?: string | undefined; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // header - computed: false, optional: true, required: false
  private _header?: AppmeshRouteSpecHttp2RouteMatchHeader[] | undefined; 
  public get header() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('header') as any;
  }
  public set header(value: AppmeshRouteSpecHttp2RouteMatchHeader[] | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
}

export function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
    per_retry_timeout: appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
  }
}

export class AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[] | undefined; 
  public get httpRetryEvents() {
    return this.getListAttribute('http_retry_events');
  }
  public set httpRetryEvents(value: string[] | undefined) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[] | undefined; 
  public get tcpRetryEvents() {
    return this.getListAttribute('tcp_retry_events');
  }
  public set tcpRetryEvents(value: string[] | undefined) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout; 
  private __perRetryTimeoutOutput = new AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(this as any, "per_retry_timeout", true);
  public get perRetryTimeout() {
    return this.__perRetryTimeoutOutput;
  }
  public putPerRetryTimeout(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout
  }
}
export interface AppmeshRouteSpecHttp2RouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference | AppmeshRouteSpecHttp2RouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttp2RouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecHttp2RouteTimeout {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
  */
  readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
}

export function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutOutputReference | AppmeshRouteSpecHttp2RouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct!.idle),
    per_request: appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshRouteSpecHttp2RouteTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined; 
  private __idleOutput = new AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference(this as any, "idle", true);
  public get idle() {
    return this.__idleOutput;
  }
  public putIdle(value: AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined; 
  private __perRequestOutput = new AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference(this as any, "per_request", true);
  public get perRequest() {
    return this.__perRequestOutput;
  }
  public putPerRequest(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined) {
    this._perRequest = value;
  }
  public resetPerRequest() {
    this._perRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest
  }
}
export interface AppmeshRouteSpecHttp2Route {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecHttp2RouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match: AppmeshRouteSpecHttp2RouteMatch;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
  */
  readonly timeout?: AppmeshRouteSpecHttp2RouteTimeout;
}

export function appmeshRouteSpecHttp2RouteToTerraform(struct?: AppmeshRouteSpecHttp2RouteOutputReference | AppmeshRouteSpecHttp2Route): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshRouteSpecHttp2RouteActionToTerraform(struct!.action),
    match: appmeshRouteSpecHttp2RouteMatchToTerraform(struct!.match),
    retry_policy: appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct!.timeout),
  }
}

export class AppmeshRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action - computed: false, optional: false, required: true
  private _action?: AppmeshRouteSpecHttp2RouteAction; 
  private __actionOutput = new AppmeshRouteSpecHttp2RouteActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: AppmeshRouteSpecHttp2RouteAction) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshRouteSpecHttp2RouteMatch; 
  private __matchOutput = new AppmeshRouteSpecHttp2RouteMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshRouteSpecHttp2RouteMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy | undefined; 
  private __retryPolicyOutput = new AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this.__retryPolicyOutput;
  }
  public putRetryPolicy(value: AppmeshRouteSpecHttp2RouteRetryPolicy | undefined) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: AppmeshRouteSpecHttp2RouteTimeout | undefined; 
  private __timeoutOutput = new AppmeshRouteSpecHttp2RouteTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: AppmeshRouteSpecHttp2RouteTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
  */
  readonly weight: number;
}

export function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttpRouteActionWeightedTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AppmeshRouteSpecHttpRouteAction {
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[];
}

export function appmeshRouteSpecHttpRouteActionToTerraform(struct?: AppmeshRouteSpecHttpRouteActionOutputReference | AppmeshRouteSpecHttpRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export class AppmeshRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget?: AppmeshRouteSpecHttpRouteActionWeightedTarget[]; 
  public get weightedTarget() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_target') as any;
  }
  public set weightedTarget(value: AppmeshRouteSpecHttpRouteActionWeightedTarget[]) {
    this._weightedTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget
  }
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
  */
  readonly start: number;
}

export function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export class AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start
  }
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
  */
  readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
}

export function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct!.range),
  }
}

export class AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string | undefined; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string | undefined) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string | undefined; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string | undefined; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string | undefined) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string | undefined; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string | undefined) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix
  }

  // range - computed: false, optional: true, required: false
  private _range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined; 
  private __rangeOutput = new AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference(this as any, "range", true);
  public get range() {
    return this.__rangeOutput;
  }
  public putRange(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range
  }
}
export interface AppmeshRouteSpecHttpRouteMatchHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch;
}

export function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct!.match),
  }
}

export interface AppmeshRouteSpecHttpRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}
  */
  readonly scheme?: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
  */
  readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[];
}

export function appmeshRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchOutputReference | AppmeshRouteSpecHttpRouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    header: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderToTerraform)(struct!.header),
  }
}

export class AppmeshRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // method - computed: false, optional: true, required: false
  private _method?: string | undefined; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string | undefined; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string | undefined) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme
  }

  // header - computed: false, optional: true, required: false
  private _header?: AppmeshRouteSpecHttpRouteMatchHeader[] | undefined; 
  public get header() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('header') as any;
  }
  public set header(value: AppmeshRouteSpecHttpRouteMatchHeader[] | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }
}
export interface AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecHttpRouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
  readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
}

export function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyOutputReference | AppmeshRouteSpecHttpRouteRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
    per_retry_timeout: appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
  }
}

export class AppmeshRouteSpecHttpRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[] | undefined; 
  public get httpRetryEvents() {
    return this.getListAttribute('http_retry_events');
  }
  public set httpRetryEvents(value: string[] | undefined) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[] | undefined; 
  public get tcpRetryEvents() {
    return this.getListAttribute('tcp_retry_events');
  }
  public set tcpRetryEvents(value: string[] | undefined) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout; 
  private __perRetryTimeoutOutput = new AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference(this as any, "per_retry_timeout", true);
  public get perRetryTimeout() {
    return this.__perRetryTimeoutOutput;
  }
  public putPerRetryTimeout(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout
  }
}
export interface AppmeshRouteSpecHttpRouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference | AppmeshRouteSpecHttpRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecHttpRouteTimeoutPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttpRouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecHttpRouteTimeout {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
  */
  readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest;
}

export function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutOutputReference | AppmeshRouteSpecHttpRouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct!.idle),
    per_request: appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshRouteSpecHttpRouteTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: AppmeshRouteSpecHttpRouteTimeoutIdle | undefined; 
  private __idleOutput = new AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference(this as any, "idle", true);
  public get idle() {
    return this.__idleOutput;
  }
  public putIdle(value: AppmeshRouteSpecHttpRouteTimeoutIdle | undefined) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined; 
  private __perRequestOutput = new AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference(this as any, "per_request", true);
  public get perRequest() {
    return this.__perRequestOutput;
  }
  public putPerRequest(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined) {
    this._perRequest = value;
  }
  public resetPerRequest() {
    this._perRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest
  }
}
export interface AppmeshRouteSpecHttpRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecHttpRouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match: AppmeshRouteSpecHttpRouteMatch;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
  */
  readonly timeout?: AppmeshRouteSpecHttpRouteTimeout;
}

export function appmeshRouteSpecHttpRouteToTerraform(struct?: AppmeshRouteSpecHttpRouteOutputReference | AppmeshRouteSpecHttpRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshRouteSpecHttpRouteActionToTerraform(struct!.action),
    match: appmeshRouteSpecHttpRouteMatchToTerraform(struct!.match),
    retry_policy: appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: appmeshRouteSpecHttpRouteTimeoutToTerraform(struct!.timeout),
  }
}

export class AppmeshRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action - computed: false, optional: false, required: true
  private _action?: AppmeshRouteSpecHttpRouteAction; 
  private __actionOutput = new AppmeshRouteSpecHttpRouteActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: AppmeshRouteSpecHttpRouteAction) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshRouteSpecHttpRouteMatch; 
  private __matchOutput = new AppmeshRouteSpecHttpRouteMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshRouteSpecHttpRouteMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy | undefined; 
  private __retryPolicyOutput = new AppmeshRouteSpecHttpRouteRetryPolicyOutputReference(this as any, "retry_policy", true);
  public get retryPolicy() {
    return this.__retryPolicyOutput;
  }
  public putRetryPolicy(value: AppmeshRouteSpecHttpRouteRetryPolicy | undefined) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: AppmeshRouteSpecHttpRouteTimeout | undefined; 
  private __timeoutOutput = new AppmeshRouteSpecHttpRouteTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: AppmeshRouteSpecHttpRouteTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
  */
  readonly weight: number;
}

export function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecTcpRouteActionWeightedTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AppmeshRouteSpecTcpRouteAction {
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[];
}

export function appmeshRouteSpecTcpRouteActionToTerraform(struct?: AppmeshRouteSpecTcpRouteActionOutputReference | AppmeshRouteSpecTcpRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export class AppmeshRouteSpecTcpRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // weighted_target - computed: false, optional: false, required: true
  private _weightedTarget?: AppmeshRouteSpecTcpRouteActionWeightedTarget[]; 
  public get weightedTarget() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('weighted_target') as any;
  }
  public set weightedTarget(value: AppmeshRouteSpecTcpRouteActionWeightedTarget[]) {
    this._weightedTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetInput() {
    return this._weightedTarget
  }
}
export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
  readonly value: number;
}

export function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference | AppmeshRouteSpecTcpRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshRouteSpecTcpRouteTimeout {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle;
}

export function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutOutputReference | AppmeshRouteSpecTcpRouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct!.idle),
  }
}

export class AppmeshRouteSpecTcpRouteTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: AppmeshRouteSpecTcpRouteTimeoutIdle | undefined; 
  private __idleOutput = new AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference(this as any, "idle", true);
  public get idle() {
    return this.__idleOutput;
  }
  public putIdle(value: AppmeshRouteSpecTcpRouteTimeoutIdle | undefined) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle
  }
}
export interface AppmeshRouteSpecTcpRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecTcpRouteAction;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
  */
  readonly timeout?: AppmeshRouteSpecTcpRouteTimeout;
}

export function appmeshRouteSpecTcpRouteToTerraform(struct?: AppmeshRouteSpecTcpRouteOutputReference | AppmeshRouteSpecTcpRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshRouteSpecTcpRouteActionToTerraform(struct!.action),
    timeout: appmeshRouteSpecTcpRouteTimeoutToTerraform(struct!.timeout),
  }
}

export class AppmeshRouteSpecTcpRouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action - computed: false, optional: false, required: true
  private _action?: AppmeshRouteSpecTcpRouteAction; 
  private __actionOutput = new AppmeshRouteSpecTcpRouteActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: AppmeshRouteSpecTcpRouteAction) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: AppmeshRouteSpecTcpRouteTimeout | undefined; 
  private __timeoutOutput = new AppmeshRouteSpecTcpRouteTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: AppmeshRouteSpecTcpRouteTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }
}
export interface AppmeshRouteSpec {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#priority AppmeshRoute#priority}
  */
  readonly priority?: number;
  /**
  * grpc_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_route AppmeshRoute#grpc_route}
  */
  readonly grpcRoute?: AppmeshRouteSpecGrpcRoute;
  /**
  * http2_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http2_route AppmeshRoute#http2_route}
  */
  readonly http2Route?: AppmeshRouteSpecHttp2Route;
  /**
  * http_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_route AppmeshRoute#http_route}
  */
  readonly httpRoute?: AppmeshRouteSpecHttpRoute;
  /**
  * tcp_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_route AppmeshRoute#tcp_route}
  */
  readonly tcpRoute?: AppmeshRouteSpecTcpRoute;
}

export function appmeshRouteSpecToTerraform(struct?: AppmeshRouteSpecOutputReference | AppmeshRouteSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    grpc_route: appmeshRouteSpecGrpcRouteToTerraform(struct!.grpcRoute),
    http2_route: appmeshRouteSpecHttp2RouteToTerraform(struct!.http2Route),
    http_route: appmeshRouteSpecHttpRouteToTerraform(struct!.httpRoute),
    tcp_route: appmeshRouteSpecTcpRouteToTerraform(struct!.tcpRoute),
  }
}

export class AppmeshRouteSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number | undefined; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute?: AppmeshRouteSpecGrpcRoute | undefined; 
  private __grpcRouteOutput = new AppmeshRouteSpecGrpcRouteOutputReference(this as any, "grpc_route", true);
  public get grpcRoute() {
    return this.__grpcRouteOutput;
  }
  public putGrpcRoute(value: AppmeshRouteSpecGrpcRoute | undefined) {
    this._grpcRoute = value;
  }
  public resetGrpcRoute() {
    this._grpcRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteInput() {
    return this._grpcRoute
  }

  // http2_route - computed: false, optional: true, required: false
  private _http2Route?: AppmeshRouteSpecHttp2Route | undefined; 
  private __http2RouteOutput = new AppmeshRouteSpecHttp2RouteOutputReference(this as any, "http2_route", true);
  public get http2Route() {
    return this.__http2RouteOutput;
  }
  public putHttp2Route(value: AppmeshRouteSpecHttp2Route | undefined) {
    this._http2Route = value;
  }
  public resetHttp2Route() {
    this._http2Route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2RouteInput() {
    return this._http2Route
  }

  // http_route - computed: false, optional: true, required: false
  private _httpRoute?: AppmeshRouteSpecHttpRoute | undefined; 
  private __httpRouteOutput = new AppmeshRouteSpecHttpRouteOutputReference(this as any, "http_route", true);
  public get httpRoute() {
    return this.__httpRouteOutput;
  }
  public putHttpRoute(value: AppmeshRouteSpecHttpRoute | undefined) {
    this._httpRoute = value;
  }
  public resetHttpRoute() {
    this._httpRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute
  }

  // tcp_route - computed: false, optional: true, required: false
  private _tcpRoute?: AppmeshRouteSpecTcpRoute | undefined; 
  private __tcpRouteOutput = new AppmeshRouteSpecTcpRouteOutputReference(this as any, "tcp_route", true);
  public get tcpRoute() {
    return this.__tcpRouteOutput;
  }
  public putTcpRoute(value: AppmeshRouteSpecTcpRoute | undefined) {
    this._tcpRoute = value;
  }
  public resetTcpRoute() {
    this._tcpRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRouteInput() {
    return this._tcpRoute
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route}
*/
export class AppmeshRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._virtualRouterName = config.virtualRouterName;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string | undefined; 
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string | undefined) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner
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
    return this._name
  }

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // virtual_router_name - computed: false, optional: false, required: true
  private _virtualRouterName?: string; 
  public get virtualRouterName() {
    return this.getStringAttribute('virtual_router_name');
  }
  public set virtualRouterName(value: string) {
    this._virtualRouterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterNameInput() {
    return this._virtualRouterName
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: AppmeshRouteSpec; 
  private __specOutput = new AppmeshRouteSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: AppmeshRouteSpec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
      spec: appmeshRouteSpecToTerraform(this._spec),
    };
  }
}
