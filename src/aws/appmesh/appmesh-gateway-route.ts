// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Mesh
*/
export interface AppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_name AppmeshGatewayRoute#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_owner AppmeshGatewayRoute#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#name AppmeshGatewayRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags AppmeshGatewayRoute#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags_all AppmeshGatewayRoute#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}
  */
  readonly virtualGatewayName: string;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#spec AppmeshGatewayRoute#spec}
  */
  readonly spec: AppmeshGatewayRouteSpec;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

export function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}

export class AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName
  }
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
  /**
  * virtual_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
}

export function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}

export class AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService; 
  private __virtualServiceOutput = new AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference(this as any, "virtual_service", true);
  public get virtualService() {
    return this.__virtualServiceOutput;
  }
  public putVirtualService(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService) {
    this._virtualService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService
  }
}
export interface AppmeshGatewayRouteSpecGrpcRouteAction {
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
}

export function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct!.target),
  }
}

export class AppmeshGatewayRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // target - computed: false, optional: false, required: true
  private _target?: AppmeshGatewayRouteSpecGrpcRouteActionTarget; 
  private __targetOutput = new AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference(this as any, "target", true);
  public get target() {
    return this.__targetOutput;
  }
  public putTarget(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }
}
export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#service_name AppmeshGatewayRoute#service_name}
  */
  readonly serviceName: string;
}

export function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }
}
export interface AppmeshGatewayRouteSpecGrpcRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecGrpcRouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch;
}

export function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct!.action),
    match: appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct!.match),
  }
}

export class AppmeshGatewayRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action - computed: false, optional: false, required: true
  private _action?: AppmeshGatewayRouteSpecGrpcRouteAction; 
  private __actionOutput = new AppmeshGatewayRouteSpecGrpcRouteActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: AppmeshGatewayRouteSpecGrpcRouteAction) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshGatewayRouteSpecGrpcRouteMatch; 
  private __matchOutput = new AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshGatewayRouteSpecGrpcRouteMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

export function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}

export class AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName
  }
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
  /**
  * virtual_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
}

export function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}

export class AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService; 
  private __virtualServiceOutput = new AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference(this as any, "virtual_service", true);
  public get virtualService() {
    return this.__virtualServiceOutput;
  }
  public putVirtualService(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService) {
    this._virtualService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService
  }
}
export interface AppmeshGatewayRouteSpecHttp2RouteAction {
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
}

export function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct!.target),
  }
}

export class AppmeshGatewayRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // target - computed: false, optional: false, required: true
  private _target?: AppmeshGatewayRouteSpecHttp2RouteActionTarget; 
  private __targetOutput = new AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference(this as any, "target", true);
  public get target() {
    return this.__targetOutput;
  }
  public putTarget(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
  */
  readonly prefix: string;
}

export function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface AppmeshGatewayRouteSpecHttp2Route {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecHttp2RouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch;
}

export function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct!.action),
    match: appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct!.match),
  }
}

export class AppmeshGatewayRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action - computed: false, optional: false, required: true
  private _action?: AppmeshGatewayRouteSpecHttp2RouteAction; 
  private __actionOutput = new AppmeshGatewayRouteSpecHttp2RouteActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: AppmeshGatewayRouteSpecHttp2RouteAction) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshGatewayRouteSpecHttp2RouteMatch; 
  private __matchOutput = new AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

export function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}

export class AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName
  }
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
  /**
  * virtual_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
}

export function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}

export class AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService; 
  private __virtualServiceOutput = new AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference(this as any, "virtual_service", true);
  public get virtualService() {
    return this.__virtualServiceOutput;
  }
  public putVirtualService(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService) {
    this._virtualService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService
  }
}
export interface AppmeshGatewayRouteSpecHttpRouteAction {
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget;
}

export function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct!.target),
  }
}

export class AppmeshGatewayRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // target - computed: false, optional: false, required: true
  private _target?: AppmeshGatewayRouteSpecHttpRouteActionTarget; 
  private __targetOutput = new AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference(this as any, "target", true);
  public get target() {
    return this.__targetOutput;
  }
  public putTarget(value: AppmeshGatewayRouteSpecHttpRouteActionTarget) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }
}
export interface AppmeshGatewayRouteSpecHttpRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
  */
  readonly prefix: string;
}

export function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class AppmeshGatewayRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface AppmeshGatewayRouteSpecHttpRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecHttpRouteAction;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecHttpRouteMatch;
}

export function appmeshGatewayRouteSpecHttpRouteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct!.action),
    match: appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct!.match),
  }
}

export class AppmeshGatewayRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action - computed: false, optional: false, required: true
  private _action?: AppmeshGatewayRouteSpecHttpRouteAction; 
  private __actionOutput = new AppmeshGatewayRouteSpecHttpRouteActionOutputReference(this as any, "action", true);
  public get action() {
    return this.__actionOutput;
  }
  public putAction(value: AppmeshGatewayRouteSpecHttpRouteAction) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshGatewayRouteSpecHttpRouteMatch; 
  private __matchOutput = new AppmeshGatewayRouteSpecHttpRouteMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }
}
export interface AppmeshGatewayRouteSpec {
  /**
  * grpc_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#grpc_route AppmeshGatewayRoute#grpc_route}
  */
  readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute;
  /**
  * http2_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http2_route AppmeshGatewayRoute#http2_route}
  */
  readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route;
  /**
  * http_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http_route AppmeshGatewayRoute#http_route}
  */
  readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute;
}

export function appmeshGatewayRouteSpecToTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_route: appmeshGatewayRouteSpecGrpcRouteToTerraform(struct!.grpcRoute),
    http2_route: appmeshGatewayRouteSpecHttp2RouteToTerraform(struct!.http2Route),
    http_route: appmeshGatewayRouteSpecHttpRouteToTerraform(struct!.httpRoute),
  }
}

export class AppmeshGatewayRouteSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute | undefined; 
  private __grpcRouteOutput = new AppmeshGatewayRouteSpecGrpcRouteOutputReference(this as any, "grpc_route", true);
  public get grpcRoute() {
    return this.__grpcRouteOutput;
  }
  public putGrpcRoute(value: AppmeshGatewayRouteSpecGrpcRoute | undefined) {
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
  private _http2Route?: AppmeshGatewayRouteSpecHttp2Route | undefined; 
  private __http2RouteOutput = new AppmeshGatewayRouteSpecHttp2RouteOutputReference(this as any, "http2_route", true);
  public get http2Route() {
    return this.__http2RouteOutput;
  }
  public putHttp2Route(value: AppmeshGatewayRouteSpecHttp2Route | undefined) {
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
  private _httpRoute?: AppmeshGatewayRouteSpecHttpRoute | undefined; 
  private __httpRouteOutput = new AppmeshGatewayRouteSpecHttpRouteOutputReference(this as any, "http_route", true);
  public get httpRoute() {
    return this.__httpRouteOutput;
  }
  public putHttpRoute(value: AppmeshGatewayRouteSpecHttpRoute | undefined) {
    this._httpRoute = value;
  }
  public resetHttpRoute() {
    this._httpRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route}
*/
export class AppmeshGatewayRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_gateway_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshGatewayRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_gateway_route',
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
    this._virtualGatewayName = config.virtualGatewayName;
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

  // virtual_gateway_name - computed: false, optional: false, required: true
  private _virtualGatewayName?: string; 
  public get virtualGatewayName() {
    return this.getStringAttribute('virtual_gateway_name');
  }
  public set virtualGatewayName(value: string) {
    this._virtualGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayNameInput() {
    return this._virtualGatewayName
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: AppmeshGatewayRouteSpec; 
  private __specOutput = new AppmeshGatewayRouteSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: AppmeshGatewayRouteSpec) {
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
      virtual_gateway_name: cdktf.stringToTerraform(this._virtualGatewayName),
      spec: appmeshGatewayRouteSpecToTerraform(this._spec),
    };
  }
}
