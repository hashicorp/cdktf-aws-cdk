// https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#id AppmeshGatewayRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}
  */
  readonly virtualGatewayName: string;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}
  */
  readonly spec: AppmeshGatewayRouteSpec;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

export function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}


export function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServiceName = value.virtualServiceName;
    }
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
    return this._virtualServiceName;
  }
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
}

export function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}


export function appmeshGatewayRouteSpecGrpcRouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service: {
      value: appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface AppmeshGatewayRouteSpecGrpcRouteAction {
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
}

export function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct!.target),
  }
}


export function appmeshGatewayRouteSpecGrpcRouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: appmeshGatewayRouteSpecGrpcRouteActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecGrpcRouteActionTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecGrpcRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target.internalValue = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target = new AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}
  */
  readonly serviceName: string;
}

export function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function appmeshGatewayRouteSpecGrpcRouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecGrpcRouteMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
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
    return this._serviceName;
  }
}
export interface AppmeshGatewayRouteSpecGrpcRoute {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecGrpcRouteAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch;
}

export function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct!.action),
    match: appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct!.match),
  }
}


export function appmeshGatewayRouteSpecGrpcRouteToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: appmeshGatewayRouteSpecGrpcRouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecGrpcRouteActionList",
    },
    match: {
      value: appmeshGatewayRouteSpecGrpcRouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecGrpcRouteMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecGrpcRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecGrpcRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new AppmeshGatewayRouteSpecGrpcRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AppmeshGatewayRouteSpecGrpcRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshGatewayRouteSpecGrpcRouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

export function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}


export function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServiceName = value.virtualServiceName;
    }
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
    return this._virtualServiceName;
  }
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
}

export function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}


export function appmeshGatewayRouteSpecHttp2RouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service: {
      value: appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface AppmeshGatewayRouteSpecHttp2RouteAction {
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
}

export function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct!.target),
  }
}


export function appmeshGatewayRouteSpecHttp2RouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: appmeshGatewayRouteSpecHttp2RouteActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttp2RouteActionTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttp2RouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target.internalValue = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target = new AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
  */
  readonly prefix: string;
}

export function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function appmeshGatewayRouteSpecHttp2RouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
    }
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
    return this._prefix;
  }
}
export interface AppmeshGatewayRouteSpecHttp2Route {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecHttp2RouteAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch;
}

export function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct!.action),
    match: appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct!.match),
  }
}


export function appmeshGatewayRouteSpecHttp2RouteToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: appmeshGatewayRouteSpecHttp2RouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttp2RouteActionList",
    },
    match: {
      value: appmeshGatewayRouteSpecHttp2RouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttp2RouteMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttp2Route | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttp2Route | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new AppmeshGatewayRouteSpecHttp2RouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AppmeshGatewayRouteSpecHttp2RouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

export function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}


export function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service_name: {
      value: cdktf.stringToHclTerraform(struct!.virtualServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServiceName = this._virtualServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualServiceName = value.virtualServiceName;
    }
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
    return this._virtualServiceName;
  }
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
  /**
  * virtual_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
}

export function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct!.virtualService),
  }
}


export function appmeshGatewayRouteSpecHttpRouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_service: {
      value: appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToHclTerraform(struct!.virtualService),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualService = this._virtualService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualService.internalValue = value.virtualService;
    }
  }

  // virtual_service - computed: false, optional: false, required: true
  private _virtualService = new AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference(this, "virtual_service");
  public get virtualService() {
    return this._virtualService;
  }
  public putVirtualService(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService) {
    this._virtualService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceInput() {
    return this._virtualService.internalValue;
  }
}
export interface AppmeshGatewayRouteSpecHttpRouteAction {
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget;
}

export function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct!.target),
  }
}


export function appmeshGatewayRouteSpecHttpRouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: appmeshGatewayRouteSpecHttpRouteActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttpRouteActionTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttpRouteAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttpRouteAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target.internalValue = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target = new AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: AppmeshGatewayRouteSpecHttpRouteActionTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface AppmeshGatewayRouteSpecHttpRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
  */
  readonly prefix: string;
}

export function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function appmeshGatewayRouteSpecHttpRouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefix = value.prefix;
    }
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
    return this._prefix;
  }
}
export interface AppmeshGatewayRouteSpecHttpRoute {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecHttpRouteAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecHttpRouteMatch;
}

export function appmeshGatewayRouteSpecHttpRouteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct!.action),
    match: appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct!.match),
  }
}


export function appmeshGatewayRouteSpecHttpRouteToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: appmeshGatewayRouteSpecHttpRouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttpRouteActionList",
    },
    match: {
      value: appmeshGatewayRouteSpecHttpRouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttpRouteMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpecHttpRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpecHttpRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new AppmeshGatewayRouteSpecHttpRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: AppmeshGatewayRouteSpecHttpRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new AppmeshGatewayRouteSpecHttpRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}
export interface AppmeshGatewayRouteSpec {
  /**
  * grpc_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#grpc_route AppmeshGatewayRoute#grpc_route}
  */
  readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute;
  /**
  * http2_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#http2_route AppmeshGatewayRoute#http2_route}
  */
  readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route;
  /**
  * http_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#http_route AppmeshGatewayRoute#http_route}
  */
  readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute;
}

export function appmeshGatewayRouteSpecToTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_route: appmeshGatewayRouteSpecGrpcRouteToTerraform(struct!.grpcRoute),
    http2_route: appmeshGatewayRouteSpecHttp2RouteToTerraform(struct!.http2Route),
    http_route: appmeshGatewayRouteSpecHttpRouteToTerraform(struct!.httpRoute),
  }
}


export function appmeshGatewayRouteSpecToHclTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_route: {
      value: appmeshGatewayRouteSpecGrpcRouteToHclTerraform(struct!.grpcRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecGrpcRouteList",
    },
    http2_route: {
      value: appmeshGatewayRouteSpecHttp2RouteToHclTerraform(struct!.http2Route),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttp2RouteList",
    },
    http_route: {
      value: appmeshGatewayRouteSpecHttpRouteToHclTerraform(struct!.httpRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AppmeshGatewayRouteSpecHttpRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppmeshGatewayRouteSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppmeshGatewayRouteSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRoute = this._grpcRoute?.internalValue;
    }
    if (this._http2Route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Route = this._http2Route?.internalValue;
    }
    if (this._httpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppmeshGatewayRouteSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._grpcRoute.internalValue = undefined;
      this._http2Route.internalValue = undefined;
      this._httpRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._grpcRoute.internalValue = value.grpcRoute;
      this._http2Route.internalValue = value.http2Route;
      this._httpRoute.internalValue = value.httpRoute;
    }
  }

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute = new AppmeshGatewayRouteSpecGrpcRouteOutputReference(this, "grpc_route");
  public get grpcRoute() {
    return this._grpcRoute;
  }
  public putGrpcRoute(value: AppmeshGatewayRouteSpecGrpcRoute) {
    this._grpcRoute.internalValue = value;
  }
  public resetGrpcRoute() {
    this._grpcRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteInput() {
    return this._grpcRoute.internalValue;
  }

  // http2_route - computed: false, optional: true, required: false
  private _http2Route = new AppmeshGatewayRouteSpecHttp2RouteOutputReference(this, "http2_route");
  public get http2Route() {
    return this._http2Route;
  }
  public putHttp2Route(value: AppmeshGatewayRouteSpecHttp2Route) {
    this._http2Route.internalValue = value;
  }
  public resetHttp2Route() {
    this._http2Route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2RouteInput() {
    return this._http2Route.internalValue;
  }

  // http_route - computed: false, optional: true, required: false
  private _httpRoute = new AppmeshGatewayRouteSpecHttpRouteOutputReference(this, "http_route");
  public get httpRoute() {
    return this._httpRoute;
  }
  public putHttpRoute(value: AppmeshGatewayRouteSpecHttpRoute) {
    this._httpRoute.internalValue = value;
  }
  public resetHttpRoute() {
    this._httpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route}
*/
export class AppmeshGatewayRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appmesh_gateway_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppmeshGatewayRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppmeshGatewayRoute to import
  * @param importFromId The id of the existing AppmeshGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppmeshGatewayRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appmesh_gateway_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshGatewayRouteConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_gateway_route',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.76.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._virtualGatewayName = config.virtualGatewayName;
    this._spec.internalValue = config.spec;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._meshName;
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string; 
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner;
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

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
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
    return this._virtualGatewayName;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new AppmeshGatewayRouteSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AppmeshGatewayRouteSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      virtual_gateway_name: cdktf.stringToTerraform(this._virtualGatewayName),
      spec: appmeshGatewayRouteSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_name: {
        value: cdktf.stringToHclTerraform(this._meshName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_owner: {
        value: cdktf.stringToHclTerraform(this._meshOwner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      virtual_gateway_name: {
        value: cdktf.stringToHclTerraform(this._virtualGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: appmeshGatewayRouteSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppmeshGatewayRouteSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
