// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Mesh
*/
export namespace AppMesh {
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
    readonly spec: AppmeshGatewayRouteSpec[];
  }
  export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
  }

  function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    }
  }

  export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
    /**
    * virtual_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService[];
  }

  function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform)(struct!.virtualService),
    }
  }

  export interface AppmeshGatewayRouteSpecGrpcRouteAction {
    /**
    * target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget[];
  }

  function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      target: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform)(struct!.target),
    }
  }

  export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#service_name AppmeshGatewayRoute#service_name}
    */
    readonly serviceName: string;
  }

  function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      service_name: cdktf.stringToTerraform(struct!.serviceName),
    }
  }

  export interface AppmeshGatewayRouteSpecGrpcRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecGrpcRouteAction[];
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch[];
  }

  function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionToTerraform)(struct!.action),
      match: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteMatchToTerraform)(struct!.match),
    }
  }

  export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
  }

  function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    }
  }

  export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
    /**
    * virtual_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService[];
  }

  function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform)(struct!.virtualService),
    }
  }

  export interface AppmeshGatewayRouteSpecHttp2RouteAction {
    /**
    * target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget[];
  }

  function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      target: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform)(struct!.target),
    }
  }

  export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix: string;
  }

  function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export interface AppmeshGatewayRouteSpecHttp2Route {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttp2RouteAction[];
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch[];
  }

  function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2Route): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionToTerraform)(struct!.action),
      match: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteMatchToTerraform)(struct!.match),
    }
  }

  export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
  }

  function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    }
  }

  export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
    /**
    * virtual_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService[];
  }

  function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform)(struct!.virtualService),
    }
  }

  export interface AppmeshGatewayRouteSpecHttpRouteAction {
    /**
    * target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget[];
  }

  function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      target: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform)(struct!.target),
    }
  }

  export interface AppmeshGatewayRouteSpecHttpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix: string;
  }

  function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export interface AppmeshGatewayRouteSpecHttpRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttpRouteAction[];
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttpRouteMatch[];
  }

  function appmeshGatewayRouteSpecHttpRouteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionToTerraform)(struct!.action),
      match: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteMatchToTerraform)(struct!.match),
    }
  }

  export interface AppmeshGatewayRouteSpec {
    /**
    * grpc_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#grpc_route AppmeshGatewayRoute#grpc_route}
    */
    readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute[];
    /**
    * http2_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http2_route AppmeshGatewayRoute#http2_route}
    */
    readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route[];
    /**
    * http_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http_route AppmeshGatewayRoute#http_route}
    */
    readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute[];
  }

  function appmeshGatewayRouteSpecToTerraform(struct?: AppmeshGatewayRouteSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      grpc_route: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteToTerraform)(struct!.grpcRoute),
      http2_route: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteToTerraform)(struct!.http2Route),
      http_route: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteToTerraform)(struct!.httpRoute),
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
    private _meshName: string;
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
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
    private _virtualGatewayName: string;
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
    private _spec: AppmeshGatewayRouteSpec[];
    public get spec() {
      return this.interpolationForAttribute('spec') as any;
    }
    public set spec(value: AppmeshGatewayRouteSpec[]) {
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
        spec: cdktf.listMapper(appmeshGatewayRouteSpecToTerraform)(this._spec),
      };
    }
  }
  export interface AppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#name AppmeshMesh#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#tags AppmeshMesh#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#tags_all AppmeshMesh#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#spec AppmeshMesh#spec}
    */
    readonly spec?: AppmeshMeshSpec[];
  }
  export interface AppmeshMeshSpecEgressFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#type AppmeshMesh#type}
    */
    readonly type?: string;
  }

  function appmeshMeshSpecEgressFilterToTerraform(struct?: AppmeshMeshSpecEgressFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface AppmeshMeshSpec {
    /**
    * egress_filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html#egress_filter AppmeshMesh#egress_filter}
    */
    readonly egressFilter?: AppmeshMeshSpecEgressFilter[];
  }

  function appmeshMeshSpecToTerraform(struct?: AppmeshMeshSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      egress_filter: cdktf.listMapper(appmeshMeshSpecEgressFilterToTerraform)(struct!.egressFilter),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html aws_appmesh_mesh}
  */
  export class AppmeshMesh extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_mesh";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_mesh.html aws_appmesh_mesh} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshMeshConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshMeshConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_mesh',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
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

    // mesh_owner - computed: true, optional: false, required: false
    public get meshOwner() {
      return this.getStringAttribute('mesh_owner');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: true, required: false
    private _spec?: AppmeshMeshSpec[];
    public get spec() {
      return this.interpolationForAttribute('spec') as any;
    }
    public set spec(value: AppmeshMeshSpec[] ) {
      this._spec = value;
    }
    public resetSpec() {
      this._spec = undefined;
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
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        spec: cdktf.listMapper(appmeshMeshSpecToTerraform)(this._spec),
      };
    }
  }
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
    readonly spec: AppmeshRouteSpec[];
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

  function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionWeightedTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function appmeshRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshRouteSpecGrpcRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
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

  function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      end: cdktf.numberToTerraform(struct!.end),
      start: cdktf.numberToTerraform(struct!.start),
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
    readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange[];
  }

  function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exact: cdktf.stringToTerraform(struct!.exact),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      regex: cdktf.stringToTerraform(struct!.regex),
      suffix: cdktf.stringToTerraform(struct!.suffix),
      range: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform)(struct!.range),
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
    readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch[];
  }

  function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadata): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      invert: cdktf.booleanToTerraform(struct!.invert),
      name: cdktf.stringToTerraform(struct!.name),
      match: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform)(struct!.match),
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

  function appmeshRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      method_name: cdktf.stringToTerraform(struct!.methodName),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      service_name: cdktf.stringToTerraform(struct!.serviceName),
      metadata: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataToTerraform)(struct!.metadata),
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

  function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
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
    readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout[];
  }

  function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.grpcRetryEvents),
      http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
      max_retries: cdktf.numberToTerraform(struct!.maxRetries),
      tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
      per_retry_timeout: cdktf.listMapper(appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform)(struct!.perRetryTimeout),
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

  function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
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

  function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshRouteSpecGrpcRouteTimeout {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle[];
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest[];
  }

  function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      idle: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform)(struct!.idle),
      per_request: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform)(struct!.perRequest),
    }
  }

  export interface AppmeshRouteSpecGrpcRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecGrpcRouteAction[];
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecGrpcRouteMatch[];
    /**
    * retry_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy[];
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecGrpcRouteTimeout[];
  }

  function appmeshRouteSpecGrpcRouteToTerraform(struct?: AppmeshRouteSpecGrpcRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionToTerraform)(struct!.action),
      match: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchToTerraform)(struct!.match),
      retry_policy: cdktf.listMapper(appmeshRouteSpecGrpcRouteRetryPolicyToTerraform)(struct!.retryPolicy),
      timeout: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutToTerraform)(struct!.timeout),
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

  function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionWeightedTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function appmeshRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshRouteSpecHttp2RouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
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

  function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      end: cdktf.numberToTerraform(struct!.end),
      start: cdktf.numberToTerraform(struct!.start),
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
    readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange[];
  }

  function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exact: cdktf.stringToTerraform(struct!.exact),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      regex: cdktf.stringToTerraform(struct!.regex),
      suffix: cdktf.stringToTerraform(struct!.suffix),
      range: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform)(struct!.range),
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
    readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch[];
  }

  function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      invert: cdktf.booleanToTerraform(struct!.invert),
      name: cdktf.stringToTerraform(struct!.name),
      match: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform)(struct!.match),
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

  function appmeshRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      method: cdktf.stringToTerraform(struct!.method),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      scheme: cdktf.stringToTerraform(struct!.scheme),
      header: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderToTerraform)(struct!.header),
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

  function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
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
    readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout[];
  }

  function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
      max_retries: cdktf.numberToTerraform(struct!.maxRetries),
      tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
      per_retry_timeout: cdktf.listMapper(appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform)(struct!.perRetryTimeout),
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

  function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
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

  function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshRouteSpecHttp2RouteTimeout {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle[];
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest[];
  }

  function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      idle: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform)(struct!.idle),
      per_request: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform)(struct!.perRequest),
    }
  }

  export interface AppmeshRouteSpecHttp2Route {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecHttp2RouteAction[];
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match: AppmeshRouteSpecHttp2RouteMatch[];
    /**
    * retry_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy[];
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecHttp2RouteTimeout[];
  }

  function appmeshRouteSpecHttp2RouteToTerraform(struct?: AppmeshRouteSpecHttp2Route): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionToTerraform)(struct!.action),
      match: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchToTerraform)(struct!.match),
      retry_policy: cdktf.listMapper(appmeshRouteSpecHttp2RouteRetryPolicyToTerraform)(struct!.retryPolicy),
      timeout: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutToTerraform)(struct!.timeout),
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

  function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttpRouteActionWeightedTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function appmeshRouteSpecHttpRouteActionToTerraform(struct?: AppmeshRouteSpecHttpRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
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

  function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      end: cdktf.numberToTerraform(struct!.end),
      start: cdktf.numberToTerraform(struct!.start),
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
    readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange[];
  }

  function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exact: cdktf.stringToTerraform(struct!.exact),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      regex: cdktf.stringToTerraform(struct!.regex),
      suffix: cdktf.stringToTerraform(struct!.suffix),
      range: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform)(struct!.range),
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
    readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch[];
  }

  function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      invert: cdktf.booleanToTerraform(struct!.invert),
      name: cdktf.stringToTerraform(struct!.name),
      match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform)(struct!.match),
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

  function appmeshRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      method: cdktf.stringToTerraform(struct!.method),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      scheme: cdktf.stringToTerraform(struct!.scheme),
      header: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderToTerraform)(struct!.header),
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

  function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
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
    readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout[];
  }

  function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
      max_retries: cdktf.numberToTerraform(struct!.maxRetries),
      tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
      per_retry_timeout: cdktf.listMapper(appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform)(struct!.perRetryTimeout),
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

  function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
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

  function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshRouteSpecHttpRouteTimeout {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle[];
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest[];
  }

  function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      idle: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutIdleToTerraform)(struct!.idle),
      per_request: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform)(struct!.perRequest),
    }
  }

  export interface AppmeshRouteSpecHttpRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecHttpRouteAction[];
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
    */
    readonly match: AppmeshRouteSpecHttpRouteMatch[];
    /**
    * retry_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy[];
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecHttpRouteTimeout[];
  }

  function appmeshRouteSpecHttpRouteToTerraform(struct?: AppmeshRouteSpecHttpRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action: cdktf.listMapper(appmeshRouteSpecHttpRouteActionToTerraform)(struct!.action),
      match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchToTerraform)(struct!.match),
      retry_policy: cdktf.listMapper(appmeshRouteSpecHttpRouteRetryPolicyToTerraform)(struct!.retryPolicy),
      timeout: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutToTerraform)(struct!.timeout),
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

  function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecTcpRouteActionWeightedTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function appmeshRouteSpecTcpRouteActionToTerraform(struct?: AppmeshRouteSpecTcpRouteAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
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

  function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshRouteSpecTcpRouteTimeout {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle[];
  }

  function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      idle: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutIdleToTerraform)(struct!.idle),
    }
  }

  export interface AppmeshRouteSpecTcpRoute {
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecTcpRouteAction[];
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecTcpRouteTimeout[];
  }

  function appmeshRouteSpecTcpRouteToTerraform(struct?: AppmeshRouteSpecTcpRoute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action: cdktf.listMapper(appmeshRouteSpecTcpRouteActionToTerraform)(struct!.action),
      timeout: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutToTerraform)(struct!.timeout),
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
    readonly grpcRoute?: AppmeshRouteSpecGrpcRoute[];
    /**
    * http2_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http2_route AppmeshRoute#http2_route}
    */
    readonly http2Route?: AppmeshRouteSpecHttp2Route[];
    /**
    * http_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_route AppmeshRoute#http_route}
    */
    readonly httpRoute?: AppmeshRouteSpecHttpRoute[];
    /**
    * tcp_route block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_route AppmeshRoute#tcp_route}
    */
    readonly tcpRoute?: AppmeshRouteSpecTcpRoute[];
  }

  function appmeshRouteSpecToTerraform(struct?: AppmeshRouteSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      grpc_route: cdktf.listMapper(appmeshRouteSpecGrpcRouteToTerraform)(struct!.grpcRoute),
      http2_route: cdktf.listMapper(appmeshRouteSpecHttp2RouteToTerraform)(struct!.http2Route),
      http_route: cdktf.listMapper(appmeshRouteSpecHttpRouteToTerraform)(struct!.httpRoute),
      tcp_route: cdktf.listMapper(appmeshRouteSpecTcpRouteToTerraform)(struct!.tcpRoute),
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
    private _meshName: string;
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
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
    private _virtualRouterName: string;
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
    private _spec: AppmeshRouteSpec[];
    public get spec() {
      return this.interpolationForAttribute('spec') as any;
    }
    public set spec(value: AppmeshRouteSpec[]) {
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
        spec: cdktf.listMapper(appmeshRouteSpecToTerraform)(this._spec),
      };
    }
  }
  export interface AppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_name AppmeshVirtualGateway#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_owner AppmeshVirtualGateway#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#name AppmeshVirtualGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags AppmeshVirtualGateway#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags_all AppmeshVirtualGateway#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#spec AppmeshVirtualGateway#spec}
    */
    readonly spec: AppmeshVirtualGatewaySpec[];
  }
  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
    */
    readonly match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      match: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
    */
    readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      acm: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
      file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames[];
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
    */
    readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      subject_alternative_names: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
      trust: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#enforce AppmeshVirtualGateway#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#ports AppmeshVirtualGateway#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
    */
    readonly certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate[];
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
    */
    readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enforce: cdktf.booleanToTerraform(struct!.enforce),
      ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
      certificate: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform)(struct!.certificate),
      validation: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct!.validation),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
    */
    readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      tls: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform)(struct!.tls),
    }
  }

  export interface AppmeshVirtualGatewaySpecBackendDefaults {
    /**
    * client_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#client_policy AppmeshVirtualGateway#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy[];
  }

  function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaults): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      client_policy: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform)(struct!.clientPolicy),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
    */
    readonly maxRequests: number;
  }

  function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_connections AppmeshVirtualGateway#max_connections}
    */
    readonly maxConnections: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_pending_requests AppmeshVirtualGateway#max_pending_requests}
    */
    readonly maxPendingRequests?: number;
  }

  function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_connections: cdktf.numberToTerraform(struct!.maxConnections),
      max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
    */
    readonly maxRequests: number;
  }

  function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
    /**
    * grpc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#grpc AppmeshVirtualGateway#grpc}
    */
    readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc[];
    /**
    * http block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http AppmeshVirtualGateway#http}
    */
    readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp[];
    /**
    * http2 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http2 AppmeshVirtualGateway#http2}
    */
    readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2[];
  }

  function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPool): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      grpc: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform)(struct!.grpc),
      http: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform)(struct!.http),
      http2: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform)(struct!.http2),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#healthy_threshold AppmeshVirtualGateway#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#interval_millis AppmeshVirtualGateway#interval_millis}
    */
    readonly intervalMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#timeout_millis AppmeshVirtualGateway#timeout_millis}
    */
    readonly timeoutMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
  }

  function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualGatewaySpecListenerHealthCheck): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
      interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
      unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
    */
    readonly protocol: string;
  }

  function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct?: AppmeshVirtualGatewaySpecListenerPortMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_arn AppmeshVirtualGateway#certificate_arn}
    */
    readonly certificateArn: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
    */
    readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm[];
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds[];
  }

  function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      acm: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform)(struct!.acm),
      file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
    */
    readonly match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch[];
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      match: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrust {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
    */
    readonly sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds[];
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames[];
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
    */
    readonly trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust[];
  }

  function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      subject_alternative_names: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
      trust: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform)(struct!.trust),
    }
  }

  export interface AppmeshVirtualGatewaySpecListenerTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mode AppmeshVirtualGateway#mode}
    */
    readonly mode: string;
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
    */
    readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate[];
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
    */
    readonly validation?: AppmeshVirtualGatewaySpecListenerTlsValidation[];
  }

  function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      mode: cdktf.stringToTerraform(struct!.mode),
      certificate: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform)(struct!.certificate),
      validation: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationToTerraform)(struct!.validation),
    }
  }

  export interface AppmeshVirtualGatewaySpecListener {
    /**
    * connection_pool block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#connection_pool AppmeshVirtualGateway#connection_pool}
    */
    readonly connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool[];
    /**
    * health_check block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#health_check AppmeshVirtualGateway#health_check}
    */
    readonly healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck[];
    /**
    * port_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port_mapping AppmeshVirtualGateway#port_mapping}
    */
    readonly portMapping: AppmeshVirtualGatewaySpecListenerPortMapping[];
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
    */
    readonly tls?: AppmeshVirtualGatewaySpecListenerTls[];
  }

  function appmeshVirtualGatewaySpecListenerToTerraform(struct?: AppmeshVirtualGatewaySpecListener): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      connection_pool: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform)(struct!.connectionPool),
      health_check: cdktf.listMapper(appmeshVirtualGatewaySpecListenerHealthCheckToTerraform)(struct!.healthCheck),
      port_mapping: cdktf.listMapper(appmeshVirtualGatewaySpecListenerPortMappingToTerraform)(struct!.portMapping),
      tls: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsToTerraform)(struct!.tls),
    }
  }

  export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
    */
    readonly path: string;
  }

  function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      path: cdktf.stringToTerraform(struct!.path),
    }
  }

  export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
    */
    readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile[];
  }

  function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLog): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform)(struct!.file),
    }
  }

  export interface AppmeshVirtualGatewaySpecLogging {
    /**
    * access_log block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#access_log AppmeshVirtualGateway#access_log}
    */
    readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog[];
  }

  function appmeshVirtualGatewaySpecLoggingToTerraform(struct?: AppmeshVirtualGatewaySpecLogging): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      access_log: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogToTerraform)(struct!.accessLog),
    }
  }

  export interface AppmeshVirtualGatewaySpec {
    /**
    * backend_defaults block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#backend_defaults AppmeshVirtualGateway#backend_defaults}
    */
    readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults[];
    /**
    * listener block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#listener AppmeshVirtualGateway#listener}
    */
    readonly listener: AppmeshVirtualGatewaySpecListener[];
    /**
    * logging block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#logging AppmeshVirtualGateway#logging}
    */
    readonly logging?: AppmeshVirtualGatewaySpecLogging[];
  }

  function appmeshVirtualGatewaySpecToTerraform(struct?: AppmeshVirtualGatewaySpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      backend_defaults: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsToTerraform)(struct!.backendDefaults),
      listener: cdktf.listMapper(appmeshVirtualGatewaySpecListenerToTerraform)(struct!.listener),
      logging: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingToTerraform)(struct!.logging),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}
  */
  export class AppmeshVirtualGateway extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_gateway";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualGatewayConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshVirtualGatewayConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_gateway',
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
    private _meshName: string;
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
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: false, required: true
    private _spec: AppmeshVirtualGatewaySpec[];
    public get spec() {
      return this.interpolationForAttribute('spec') as any;
    }
    public set spec(value: AppmeshVirtualGatewaySpec[]) {
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
        spec: cdktf.listMapper(appmeshVirtualGatewaySpecToTerraform)(this._spec),
      };
    }
  }
  export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_name AppmeshVirtualNode#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_owner AppmeshVirtualNode#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#name AppmeshVirtualNode#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags AppmeshVirtualNode#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags_all AppmeshVirtualNode#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#spec AppmeshVirtualNode#spec}
    */
    readonly spec: AppmeshVirtualNodeSpec[];
  }
  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      match: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm[];
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
      file: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames[];
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
      trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate[];
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enforce: cdktf.booleanToTerraform(struct!.enforce),
      ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
      certificate: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform)(struct!.certificate),
      validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform)(struct!.validation),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform)(struct!.tls),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service_name AppmeshVirtualNode#virtual_service_name}
    */
    readonly virtualServiceName: string;
    /**
    * client_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy[];
  }

  function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualService): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
      client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform)(struct!.clientPolicy),
    }
  }

  export interface AppmeshVirtualNodeSpecBackend {
    /**
    * virtual_service block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service AppmeshVirtualNode#virtual_service}
    */
    readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService[];
  }

  function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_service: cdktf.listMapper(appmeshVirtualNodeSpecBackendVirtualServiceToTerraform)(struct!.virtualService),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      match: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
    */
    readonly certificateAuthorityArns: string[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm[];
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      acm: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct!.acm),
      file: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames[];
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
      trust: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct!.trust),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
    */
    readonly enforce?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
    */
    readonly ports?: number[];
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate[];
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enforce: cdktf.booleanToTerraform(struct!.enforce),
      ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
      certificate: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform)(struct!.certificate),
      validation: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct!.validation),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      tls: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform)(struct!.tls),
    }
  }

  export interface AppmeshVirtualNodeSpecBackendDefaults {
    /**
    * client_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
    */
    readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy[];
  }

  function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaults): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      client_policy: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform)(struct!.clientPolicy),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
    */
    readonly maxRequests: number;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
    */
    readonly maxConnections: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_pending_requests AppmeshVirtualNode#max_pending_requests}
    */
    readonly maxPendingRequests?: number;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_connections: cdktf.numberToTerraform(struct!.maxConnections),
      max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
    */
    readonly maxRequests: number;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
    */
    readonly maxConnections: number;
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerConnectionPool {
    /**
    * grpc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
    */
    readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc[];
    /**
    * http block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
    */
    readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp[];
    /**
    * http2 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
    */
    readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2[];
    /**
    * tcp block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
    */
    readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp[];
  }

  function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPool): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform)(struct!.grpc),
      http: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform)(struct!.http),
      http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform)(struct!.http2),
      tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform)(struct!.tcp),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#healthy_threshold AppmeshVirtualNode#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval_millis AppmeshVirtualNode#interval_millis}
    */
    readonly intervalMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout_millis AppmeshVirtualNode#timeout_millis}
    */
    readonly timeoutMillis: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unhealthy_threshold AppmeshVirtualNode#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
  }

  function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheck): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
      interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
      unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_ejection_percent AppmeshVirtualNode#max_ejection_percent}
    */
    readonly maxEjectionPercent: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_server_errors AppmeshVirtualNode#max_server_errors}
    */
    readonly maxServerErrors: number;
    /**
    * base_ejection_duration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#base_ejection_duration AppmeshVirtualNode#base_ejection_duration}
    */
    readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration[];
    /**
    * interval block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval AppmeshVirtualNode#interval}
    */
    readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval[];
  }

  function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetection): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
      max_server_errors: cdktf.numberToTerraform(struct!.maxServerErrors),
      base_ejection_duration: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform)(struct!.baseEjectionDuration),
      interval: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform)(struct!.interval),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
    */
    readonly protocol: string;
  }

  function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle[];
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest[];
  }

  function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform)(struct!.idle),
      per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform)(struct!.perRequest),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle[];
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest[];
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform)(struct!.idle),
      per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform)(struct!.perRequest),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle[];
    /**
    * per_request block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
    */
    readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest[];
  }

  function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform)(struct!.idle),
      per_request: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform)(struct!.perRequest),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
    */
    readonly value: number;
  }

  function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      unit: cdktf.stringToTerraform(struct!.unit),
      value: cdktf.numberToTerraform(struct!.value),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
    /**
    * idle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
    */
    readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle[];
  }

  function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      idle: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform)(struct!.idle),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTimeout {
    /**
    * grpc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
    */
    readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc[];
    /**
    * http block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
    */
    readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp[];
    /**
    * http2 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
    */
    readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2[];
    /**
    * tcp block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
    */
    readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp[];
  }

  function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeout): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      grpc: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform)(struct!.grpc),
      http: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform)(struct!.http),
      http2: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform)(struct!.http2),
      tcp: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform)(struct!.tcp),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_arn AppmeshVirtualNode#certificate_arn}
    */
    readonly certificateArn: string;
  }

  function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
    */
    readonly privateKey: string;
  }

  function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
      private_key: cdktf.stringToTerraform(struct!.privateKey),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsCertificateSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
    /**
    * acm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
    */
    readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm[];
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds[];
  }

  function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      acm: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform)(struct!.acm),
      file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
    */
    readonly exact: string[];
  }

  function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
    /**
    * match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
    */
    readonly match: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch[];
  }

  function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      match: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct!.match),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
    */
    readonly certificateChain: string;
  }

  function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
    */
    readonly secretName: string;
  }

  function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      secret_name: cdktf.stringToTerraform(struct!.secretName),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsValidationTrust {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile[];
    /**
    * sds block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
    */
    readonly sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds[];
  }

  function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrust): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform)(struct!.file),
      sds: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform)(struct!.sds),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTlsValidation {
    /**
    * subject_alternative_names block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames[];
    /**
    * trust block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
    */
    readonly trust: AppmeshVirtualNodeSpecListenerTlsValidationTrust[];
  }

  function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      subject_alternative_names: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform)(struct!.subjectAlternativeNames),
      trust: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform)(struct!.trust),
    }
  }

  export interface AppmeshVirtualNodeSpecListenerTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mode AppmeshVirtualNode#mode}
    */
    readonly mode: string;
    /**
    * certificate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
    */
    readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate[];
    /**
    * validation block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
    */
    readonly validation?: AppmeshVirtualNodeSpecListenerTlsValidation[];
  }

  function appmeshVirtualNodeSpecListenerTlsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      mode: cdktf.stringToTerraform(struct!.mode),
      certificate: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsCertificateToTerraform)(struct!.certificate),
      validation: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsValidationToTerraform)(struct!.validation),
    }
  }

  export interface AppmeshVirtualNodeSpecListener {
    /**
    * connection_pool block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#connection_pool AppmeshVirtualNode#connection_pool}
    */
    readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool[];
    /**
    * health_check block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#health_check AppmeshVirtualNode#health_check}
    */
    readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck[];
    /**
    * outlier_detection block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#outlier_detection AppmeshVirtualNode#outlier_detection}
    */
    readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection[];
    /**
    * port_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port_mapping AppmeshVirtualNode#port_mapping}
    */
    readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping[];
    /**
    * timeout block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout AppmeshVirtualNode#timeout}
    */
    readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout[];
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
    */
    readonly tls?: AppmeshVirtualNodeSpecListenerTls[];
  }

  function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListener): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      connection_pool: cdktf.listMapper(appmeshVirtualNodeSpecListenerConnectionPoolToTerraform)(struct!.connectionPool),
      health_check: cdktf.listMapper(appmeshVirtualNodeSpecListenerHealthCheckToTerraform)(struct!.healthCheck),
      outlier_detection: cdktf.listMapper(appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform)(struct!.outlierDetection),
      port_mapping: cdktf.listMapper(appmeshVirtualNodeSpecListenerPortMappingToTerraform)(struct!.portMapping),
      timeout: cdktf.listMapper(appmeshVirtualNodeSpecListenerTimeoutToTerraform)(struct!.timeout),
      tls: cdktf.listMapper(appmeshVirtualNodeSpecListenerTlsToTerraform)(struct!.tls),
    }
  }

  export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
    */
    readonly path: string;
  }

  function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFile): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      path: cdktf.stringToTerraform(struct!.path),
    }
  }

  export interface AppmeshVirtualNodeSpecLoggingAccessLog {
    /**
    * file block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
    */
    readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile[];
  }

  function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLog): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform)(struct!.file),
    }
  }

  export interface AppmeshVirtualNodeSpecLogging {
    /**
    * access_log block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#access_log AppmeshVirtualNode#access_log}
    */
    readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog[];
  }

  function appmeshVirtualNodeSpecLoggingToTerraform(struct?: AppmeshVirtualNodeSpecLogging): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      access_log: cdktf.listMapper(appmeshVirtualNodeSpecLoggingAccessLogToTerraform)(struct!.accessLog),
    }
  }

  export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#attributes AppmeshVirtualNode#attributes}
    */
    readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#namespace_name AppmeshVirtualNode#namespace_name}
    */
    readonly namespaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_name AppmeshVirtualNode#service_name}
    */
    readonly serviceName: string;
  }

  function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
      namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
      service_name: cdktf.stringToTerraform(struct!.serviceName),
    }
  }

  export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#hostname AppmeshVirtualNode#hostname}
    */
    readonly hostname: string;
  }

  function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      hostname: cdktf.stringToTerraform(struct!.hostname),
    }
  }

  export interface AppmeshVirtualNodeSpecServiceDiscovery {
    /**
    * aws_cloud_map block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#aws_cloud_map AppmeshVirtualNode#aws_cloud_map}
    */
    readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap[];
    /**
    * dns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#dns AppmeshVirtualNode#dns}
    */
    readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns[];
  }

  function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscovery): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      aws_cloud_map: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform)(struct!.awsCloudMap),
      dns: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform)(struct!.dns),
    }
  }

  export interface AppmeshVirtualNodeSpec {
    /**
    * backend block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend AppmeshVirtualNode#backend}
    */
    readonly backend?: AppmeshVirtualNodeSpecBackend[];
    /**
    * backend_defaults block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend_defaults AppmeshVirtualNode#backend_defaults}
    */
    readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults[];
    /**
    * listener block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#listener AppmeshVirtualNode#listener}
    */
    readonly listener?: AppmeshVirtualNodeSpecListener[];
    /**
    * logging block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#logging AppmeshVirtualNode#logging}
    */
    readonly logging?: AppmeshVirtualNodeSpecLogging[];
    /**
    * service_discovery block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_discovery AppmeshVirtualNode#service_discovery}
    */
    readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery[];
  }

  function appmeshVirtualNodeSpecToTerraform(struct?: AppmeshVirtualNodeSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct!.backend),
      backend_defaults: cdktf.listMapper(appmeshVirtualNodeSpecBackendDefaultsToTerraform)(struct!.backendDefaults),
      listener: cdktf.listMapper(appmeshVirtualNodeSpecListenerToTerraform)(struct!.listener),
      logging: cdktf.listMapper(appmeshVirtualNodeSpecLoggingToTerraform)(struct!.logging),
      service_discovery: cdktf.listMapper(appmeshVirtualNodeSpecServiceDiscoveryToTerraform)(struct!.serviceDiscovery),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}
  */
  export class AppmeshVirtualNode extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_node";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualNodeConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_node',
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
    private _meshName: string;
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
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: false, required: true
    private _spec: AppmeshVirtualNodeSpec[];
    public get spec() {
      return this.interpolationForAttribute('spec') as any;
    }
    public set spec(value: AppmeshVirtualNodeSpec[]) {
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
        spec: cdktf.listMapper(appmeshVirtualNodeSpecToTerraform)(this._spec),
      };
    }
  }
  export interface AppmeshVirtualRouterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_name AppmeshVirtualRouter#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#mesh_owner AppmeshVirtualRouter#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#name AppmeshVirtualRouter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags AppmeshVirtualRouter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#tags_all AppmeshVirtualRouter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#spec AppmeshVirtualRouter#spec}
    */
    readonly spec: AppmeshVirtualRouterSpec[];
  }
  export interface AppmeshVirtualRouterSpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port AppmeshVirtualRouter#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#protocol AppmeshVirtualRouter#protocol}
    */
    readonly protocol: string;
  }

  function appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualRouterSpecListenerPortMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      port: cdktf.numberToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
    }
  }

  export interface AppmeshVirtualRouterSpecListener {
    /**
    * port_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#port_mapping AppmeshVirtualRouter#port_mapping}
    */
    readonly portMapping: AppmeshVirtualRouterSpecListenerPortMapping[];
  }

  function appmeshVirtualRouterSpecListenerToTerraform(struct?: AppmeshVirtualRouterSpecListener): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      port_mapping: cdktf.listMapper(appmeshVirtualRouterSpecListenerPortMappingToTerraform)(struct!.portMapping),
    }
  }

  export interface AppmeshVirtualRouterSpec {
    /**
    * listener block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html#listener AppmeshVirtualRouter#listener}
    */
    readonly listener: AppmeshVirtualRouterSpecListener[];
  }

  function appmeshVirtualRouterSpecToTerraform(struct?: AppmeshVirtualRouterSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      listener: cdktf.listMapper(appmeshVirtualRouterSpecListenerToTerraform)(struct!.listener),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router}
  */
  export class AppmeshVirtualRouter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_router";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html aws_appmesh_virtual_router} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualRouterConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshVirtualRouterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_router',
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
    private _meshName: string;
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
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: false, required: true
    private _spec: AppmeshVirtualRouterSpec[];
    public get spec() {
      return this.interpolationForAttribute('spec') as any;
    }
    public set spec(value: AppmeshVirtualRouterSpec[]) {
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
        spec: cdktf.listMapper(appmeshVirtualRouterSpecToTerraform)(this._spec),
      };
    }
  }
  export interface AppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_name AppmeshVirtualService#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_owner AppmeshVirtualService#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#name AppmeshVirtualService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags AppmeshVirtualService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags_all AppmeshVirtualService#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * spec block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#spec AppmeshVirtualService#spec}
    */
    readonly spec: AppmeshVirtualServiceSpec[];
  }
  export interface AppmeshVirtualServiceSpecProviderVirtualNode {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node_name AppmeshVirtualService#virtual_node_name}
    */
    readonly virtualNodeName: string;
  }

  function appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualNode): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_node_name: cdktf.stringToTerraform(struct!.virtualNodeName),
    }
  }

  export interface AppmeshVirtualServiceSpecProviderVirtualRouter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router_name AppmeshVirtualService#virtual_router_name}
    */
    readonly virtualRouterName: string;
  }

  function appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualRouter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_router_name: cdktf.stringToTerraform(struct!.virtualRouterName),
    }
  }

  export interface AppmeshVirtualServiceSpecProvider {
    /**
    * virtual_node block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node AppmeshVirtualService#virtual_node}
    */
    readonly virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode[];
    /**
    * virtual_router block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router AppmeshVirtualService#virtual_router}
    */
    readonly virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter[];
  }

  function appmeshVirtualServiceSpecProviderToTerraform(struct?: AppmeshVirtualServiceSpecProvider): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      virtual_node: cdktf.listMapper(appmeshVirtualServiceSpecProviderVirtualNodeToTerraform)(struct!.virtualNode),
      virtual_router: cdktf.listMapper(appmeshVirtualServiceSpecProviderVirtualRouterToTerraform)(struct!.virtualRouter),
    }
  }

  export interface AppmeshVirtualServiceSpec {
    /**
    * provider block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#provider AppmeshVirtualService#provider}
    */
    readonly provider?: AppmeshVirtualServiceSpecProvider[];
  }

  function appmeshVirtualServiceSpecToTerraform(struct?: AppmeshVirtualServiceSpec): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      provider: cdktf.listMapper(appmeshVirtualServiceSpecProviderToTerraform)(struct!.provider),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service}
  */
  export class AppmeshVirtualService extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualServiceConfig
    */
    public constructor(scope: Construct, id: string, config: AppmeshVirtualServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_service',
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
    private _meshName: string;
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
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // spec - computed: false, optional: false, required: true
    private _spec: AppmeshVirtualServiceSpec[];
    public get spec() {
      return this.interpolationForAttribute('spec') as any;
    }
    public set spec(value: AppmeshVirtualServiceSpec[]) {
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
        spec: cdktf.listMapper(appmeshVirtualServiceSpecToTerraform)(this._spec),
      };
    }
  }
  export interface DataAwsAppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#mesh_owner DataAwsAppmeshMesh#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#name DataAwsAppmeshMesh#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html#tags DataAwsAppmeshMesh#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsAppmeshMeshSpecEgressFilter extends cdktf.ComplexComputedList {

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }
  export class DataAwsAppmeshMeshSpec extends cdktf.ComplexComputedList {

    // egress_filter - computed: true, optional: false, required: false
    public get egressFilter() {
      return this.interpolationForAttribute('egress_filter') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html aws_appmesh_mesh}
  */
  export class DataAwsAppmeshMesh extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_mesh";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_mesh.html aws_appmesh_mesh} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshMeshConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsAppmeshMeshConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_mesh',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._meshOwner = config.meshOwner;
      this._name = config.name;
      this._tags = config.tags;
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
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // spec - computed: true, optional: false, required: false
    public spec(index: string) {
      return new DataAwsAppmeshMeshSpec(this, 'spec', index);
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable
    public get tags(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        mesh_owner: cdktf.stringToTerraform(this._meshOwner),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsAppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#mesh_name DataAwsAppmeshVirtualService#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#name DataAwsAppmeshVirtualService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html#tags DataAwsAppmeshVirtualService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsAppmeshVirtualServiceSpecProviderVirtualNode extends cdktf.ComplexComputedList {

    // virtual_node_name - computed: true, optional: false, required: false
    public get virtualNodeName() {
      return this.getStringAttribute('virtual_node_name');
    }
  }
  export class DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter extends cdktf.ComplexComputedList {

    // virtual_router_name - computed: true, optional: false, required: false
    public get virtualRouterName() {
      return this.getStringAttribute('virtual_router_name');
    }
  }
  export class DataAwsAppmeshVirtualServiceSpecProvider extends cdktf.ComplexComputedList {

    // virtual_node - computed: true, optional: false, required: false
    public get virtualNode() {
      return this.interpolationForAttribute('virtual_node') as any;
    }

    // virtual_router - computed: true, optional: false, required: false
    public get virtualRouter() {
      return this.interpolationForAttribute('virtual_router') as any;
    }
  }
  export class DataAwsAppmeshVirtualServiceSpec extends cdktf.ComplexComputedList {

    // provider - computed: true, optional: false, required: false
    public get provider() {
      return this.interpolationForAttribute('provider') as any;
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html aws_appmesh_virtual_service}
  */
  export class DataAwsAppmeshVirtualService extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appmesh_virtual_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service.html aws_appmesh_virtual_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshVirtualServiceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsAppmeshVirtualServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appmesh_virtual_service',
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
    private _meshName: string;
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
      return this._meshOwner
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // spec - computed: true, optional: false, required: false
    public spec(index: string) {
      return new DataAwsAppmeshVirtualServiceSpec(this, 'spec', index);
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
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
      };
    }
  }
}
