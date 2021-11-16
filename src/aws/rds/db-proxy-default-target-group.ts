// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface DbProxyDefaultTargetGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}
  */
  readonly dbProxyName: string;
  /**
  * connection_pool_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}
  */
  readonly connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#timeouts DbProxyDefaultTargetGroup#timeouts}
  */
  readonly timeouts?: DbProxyDefaultTargetGroupTimeouts;
}
export interface DbProxyDefaultTargetGroupConnectionPoolConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}
  */
  readonly connectionBorrowTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#init_query DbProxyDefaultTargetGroup#init_query}
  */
  readonly initQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}
  */
  readonly maxConnectionsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}
  */
  readonly maxIdleConnectionsPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}
  */
  readonly sessionPinningFilters?: string[];
}

export function dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(struct?: DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference | DbProxyDefaultTargetGroupConnectionPoolConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_borrow_timeout: cdktf.numberToTerraform(struct!.connectionBorrowTimeout),
    init_query: cdktf.stringToTerraform(struct!.initQuery),
    max_connections_percent: cdktf.numberToTerraform(struct!.maxConnectionsPercent),
    max_idle_connections_percent: cdktf.numberToTerraform(struct!.maxIdleConnectionsPercent),
    session_pinning_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sessionPinningFilters),
  }
}

export class DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // connection_borrow_timeout - computed: false, optional: true, required: false
  private _connectionBorrowTimeout?: number | undefined; 
  public get connectionBorrowTimeout() {
    return this.getNumberAttribute('connection_borrow_timeout');
  }
  public set connectionBorrowTimeout(value: number | undefined) {
    this._connectionBorrowTimeout = value;
  }
  public resetConnectionBorrowTimeout() {
    this._connectionBorrowTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBorrowTimeoutInput() {
    return this._connectionBorrowTimeout
  }

  // init_query - computed: false, optional: true, required: false
  private _initQuery?: string | undefined; 
  public get initQuery() {
    return this.getStringAttribute('init_query');
  }
  public set initQuery(value: string | undefined) {
    this._initQuery = value;
  }
  public resetInitQuery() {
    this._initQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initQueryInput() {
    return this._initQuery
  }

  // max_connections_percent - computed: false, optional: true, required: false
  private _maxConnectionsPercent?: number | undefined; 
  public get maxConnectionsPercent() {
    return this.getNumberAttribute('max_connections_percent');
  }
  public set maxConnectionsPercent(value: number | undefined) {
    this._maxConnectionsPercent = value;
  }
  public resetMaxConnectionsPercent() {
    this._maxConnectionsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsPercentInput() {
    return this._maxConnectionsPercent
  }

  // max_idle_connections_percent - computed: false, optional: true, required: false
  private _maxIdleConnectionsPercent?: number | undefined; 
  public get maxIdleConnectionsPercent() {
    return this.getNumberAttribute('max_idle_connections_percent');
  }
  public set maxIdleConnectionsPercent(value: number | undefined) {
    this._maxIdleConnectionsPercent = value;
  }
  public resetMaxIdleConnectionsPercent() {
    this._maxIdleConnectionsPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleConnectionsPercentInput() {
    return this._maxIdleConnectionsPercent
  }

  // session_pinning_filters - computed: false, optional: true, required: false
  private _sessionPinningFilters?: string[] | undefined; 
  public get sessionPinningFilters() {
    return this.getListAttribute('session_pinning_filters');
  }
  public set sessionPinningFilters(value: string[] | undefined) {
    this._sessionPinningFilters = value;
  }
  public resetSessionPinningFilters() {
    this._sessionPinningFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPinningFiltersInput() {
    return this._sessionPinningFilters
  }
}
export interface DbProxyDefaultTargetGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#create DbProxyDefaultTargetGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#update DbProxyDefaultTargetGroup#update}
  */
  readonly update?: string;
}

export function dbProxyDefaultTargetGroupTimeoutsToTerraform(struct?: DbProxyDefaultTargetGroupTimeoutsOutputReference | DbProxyDefaultTargetGroupTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class DbProxyDefaultTargetGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group}
*/
export class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_db_proxy_default_target_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbProxyDefaultTargetGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DbProxyDefaultTargetGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_proxy_default_target_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dbProxyName = config.dbProxyName;
    this._connectionPoolConfig = config.connectionPoolConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // db_proxy_name - computed: false, optional: false, required: true
  private _dbProxyName?: string; 
  public get dbProxyName() {
    return this.getStringAttribute('db_proxy_name');
  }
  public set dbProxyName(value: string) {
    this._dbProxyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyNameInput() {
    return this._dbProxyName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // connection_pool_config - computed: false, optional: true, required: false
  private _connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig | undefined; 
  private __connectionPoolConfigOutput = new DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference(this as any, "connection_pool_config", true);
  public get connectionPoolConfig() {
    return this.__connectionPoolConfigOutput;
  }
  public putConnectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig | undefined) {
    this._connectionPoolConfig = value;
  }
  public resetConnectionPoolConfig() {
    this._connectionPoolConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolConfigInput() {
    return this._connectionPoolConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbProxyDefaultTargetGroupTimeouts | undefined; 
  private __timeoutsOutput = new DbProxyDefaultTargetGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DbProxyDefaultTargetGroupTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
      connection_pool_config: dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(this._connectionPoolConfig),
      timeouts: dbProxyDefaultTargetGroupTimeoutsToTerraform(this._timeouts),
    };
  }
}
