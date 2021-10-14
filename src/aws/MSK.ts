// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Streaming for Kafka
*/
export namespace MSK {
  export interface MskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#cluster_name MskCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enhanced_monitoring MskCluster#enhanced_monitoring}
    */
    readonly enhancedMonitoring?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#kafka_version MskCluster#kafka_version}
    */
    readonly kafkaVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#number_of_broker_nodes MskCluster#number_of_broker_nodes}
    */
    readonly numberOfBrokerNodes: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tags MskCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tags_all MskCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * broker_node_group_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#broker_node_group_info MskCluster#broker_node_group_info}
    */
    readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo[];
    /**
    * client_authentication block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_authentication MskCluster#client_authentication}
    */
    readonly clientAuthentication?: MskClusterClientAuthentication[];
    /**
    * configuration_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#configuration_info MskCluster#configuration_info}
    */
    readonly configurationInfo?: MskClusterConfigurationInfo[];
    /**
    * encryption_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_info MskCluster#encryption_info}
    */
    readonly encryptionInfo?: MskClusterEncryptionInfo[];
    /**
    * logging_info block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#logging_info MskCluster#logging_info}
    */
    readonly loggingInfo?: MskClusterLoggingInfo[];
    /**
    * open_monitoring block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#open_monitoring MskCluster#open_monitoring}
    */
    readonly openMonitoring?: MskClusterOpenMonitoring[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#timeouts MskCluster#timeouts}
    */
    readonly timeouts?: MskClusterTimeouts;
  }
  export interface MskClusterBrokerNodeGroupInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#az_distribution MskCluster#az_distribution}
    */
    readonly azDistribution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_subnets MskCluster#client_subnets}
    */
    readonly clientSubnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#ebs_volume_size MskCluster#ebs_volume_size}
    */
    readonly ebsVolumeSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#instance_type MskCluster#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#security_groups MskCluster#security_groups}
    */
    readonly securityGroups: string[];
  }

  function mskClusterBrokerNodeGroupInfoToTerraform(struct?: MskClusterBrokerNodeGroupInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      az_distribution: cdktf.stringToTerraform(struct!.azDistribution),
      client_subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clientSubnets),
      ebs_volume_size: cdktf.numberToTerraform(struct!.ebsVolumeSize),
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    }
  }

  export interface MskClusterClientAuthenticationSasl {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#iam MskCluster#iam}
    */
    readonly iam?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#scram MskCluster#scram}
    */
    readonly scram?: boolean | cdktf.IResolvable;
  }

  function mskClusterClientAuthenticationSaslToTerraform(struct?: MskClusterClientAuthenticationSasl): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      iam: cdktf.booleanToTerraform(struct!.iam),
      scram: cdktf.booleanToTerraform(struct!.scram),
    }
  }

  export interface MskClusterClientAuthenticationTls {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#certificate_authority_arns MskCluster#certificate_authority_arns}
    */
    readonly certificateAuthorityArns?: string[];
  }

  function mskClusterClientAuthenticationTlsToTerraform(struct?: MskClusterClientAuthenticationTls): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
    }
  }

  export interface MskClusterClientAuthentication {
    /**
    * sasl block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#sasl MskCluster#sasl}
    */
    readonly sasl?: MskClusterClientAuthenticationSasl[];
    /**
    * tls block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#tls MskCluster#tls}
    */
    readonly tls?: MskClusterClientAuthenticationTls[];
  }

  function mskClusterClientAuthenticationToTerraform(struct?: MskClusterClientAuthentication): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      sasl: cdktf.listMapper(mskClusterClientAuthenticationSaslToTerraform)(struct!.sasl),
      tls: cdktf.listMapper(mskClusterClientAuthenticationTlsToTerraform)(struct!.tls),
    }
  }

  export interface MskClusterConfigurationInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#arn MskCluster#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#revision MskCluster#revision}
    */
    readonly revision: number;
  }

  function mskClusterConfigurationInfoToTerraform(struct?: MskClusterConfigurationInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      revision: cdktf.numberToTerraform(struct!.revision),
    }
  }

  export interface MskClusterEncryptionInfoEncryptionInTransit {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#client_broker MskCluster#client_broker}
    */
    readonly clientBroker?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#in_cluster MskCluster#in_cluster}
    */
    readonly inCluster?: boolean | cdktf.IResolvable;
  }

  function mskClusterEncryptionInfoEncryptionInTransitToTerraform(struct?: MskClusterEncryptionInfoEncryptionInTransit): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      client_broker: cdktf.stringToTerraform(struct!.clientBroker),
      in_cluster: cdktf.booleanToTerraform(struct!.inCluster),
    }
  }

  export interface MskClusterEncryptionInfo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_at_rest_kms_key_arn MskCluster#encryption_at_rest_kms_key_arn}
    */
    readonly encryptionAtRestKmsKeyArn?: string;
    /**
    * encryption_in_transit block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#encryption_in_transit MskCluster#encryption_in_transit}
    */
    readonly encryptionInTransit?: MskClusterEncryptionInfoEncryptionInTransit[];
  }

  function mskClusterEncryptionInfoToTerraform(struct?: MskClusterEncryptionInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      encryption_at_rest_kms_key_arn: cdktf.stringToTerraform(struct!.encryptionAtRestKmsKeyArn),
      encryption_in_transit: cdktf.listMapper(mskClusterEncryptionInfoEncryptionInTransitToTerraform)(struct!.encryptionInTransit),
    }
  }

  export interface MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#log_group MskCluster#log_group}
    */
    readonly logGroup?: string;
  }

  function mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group: cdktf.stringToTerraform(struct!.logGroup),
    }
  }

  export interface MskClusterLoggingInfoBrokerLogsFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#delivery_stream MskCluster#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
  }

  function mskClusterLoggingInfoBrokerLogsFirehoseToTerraform(struct?: MskClusterLoggingInfoBrokerLogsFirehose): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      delivery_stream: cdktf.stringToTerraform(struct!.deliveryStream),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export interface MskClusterLoggingInfoBrokerLogsS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#bucket MskCluster#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled MskCluster#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#prefix MskCluster#prefix}
    */
    readonly prefix?: string;
  }

  function mskClusterLoggingInfoBrokerLogsS3ToTerraform(struct?: MskClusterLoggingInfoBrokerLogsS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export interface MskClusterLoggingInfoBrokerLogs {
    /**
    * cloudwatch_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#cloudwatch_logs MskCluster#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: MskClusterLoggingInfoBrokerLogsCloudwatchLogs[];
    /**
    * firehose block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#firehose MskCluster#firehose}
    */
    readonly firehose?: MskClusterLoggingInfoBrokerLogsFirehose[];
    /**
    * s3 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#s3 MskCluster#s3}
    */
    readonly s3?: MskClusterLoggingInfoBrokerLogsS3[];
  }

  function mskClusterLoggingInfoBrokerLogsToTerraform(struct?: MskClusterLoggingInfoBrokerLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      cloudwatch_logs: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsCloudwatchLogsToTerraform)(struct!.cloudwatchLogs),
      firehose: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsFirehoseToTerraform)(struct!.firehose),
      s3: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsS3ToTerraform)(struct!.s3),
    }
  }

  export interface MskClusterLoggingInfo {
    /**
    * broker_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#broker_logs MskCluster#broker_logs}
    */
    readonly brokerLogs: MskClusterLoggingInfoBrokerLogs[];
  }

  function mskClusterLoggingInfoToTerraform(struct?: MskClusterLoggingInfo): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      broker_logs: cdktf.listMapper(mskClusterLoggingInfoBrokerLogsToTerraform)(struct!.brokerLogs),
    }
  }

  export interface MskClusterOpenMonitoringPrometheusJmxExporter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled_in_broker MskCluster#enabled_in_broker}
    */
    readonly enabledInBroker: boolean | cdktf.IResolvable;
  }

  function mskClusterOpenMonitoringPrometheusJmxExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusJmxExporter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
    }
  }

  export interface MskClusterOpenMonitoringPrometheusNodeExporter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#enabled_in_broker MskCluster#enabled_in_broker}
    */
    readonly enabledInBroker: boolean | cdktf.IResolvable;
  }

  function mskClusterOpenMonitoringPrometheusNodeExporterToTerraform(struct?: MskClusterOpenMonitoringPrometheusNodeExporter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled_in_broker: cdktf.booleanToTerraform(struct!.enabledInBroker),
    }
  }

  export interface MskClusterOpenMonitoringPrometheus {
    /**
    * jmx_exporter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#jmx_exporter MskCluster#jmx_exporter}
    */
    readonly jmxExporter?: MskClusterOpenMonitoringPrometheusJmxExporter[];
    /**
    * node_exporter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#node_exporter MskCluster#node_exporter}
    */
    readonly nodeExporter?: MskClusterOpenMonitoringPrometheusNodeExporter[];
  }

  function mskClusterOpenMonitoringPrometheusToTerraform(struct?: MskClusterOpenMonitoringPrometheus): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      jmx_exporter: cdktf.listMapper(mskClusterOpenMonitoringPrometheusJmxExporterToTerraform)(struct!.jmxExporter),
      node_exporter: cdktf.listMapper(mskClusterOpenMonitoringPrometheusNodeExporterToTerraform)(struct!.nodeExporter),
    }
  }

  export interface MskClusterOpenMonitoring {
    /**
    * prometheus block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#prometheus MskCluster#prometheus}
    */
    readonly prometheus: MskClusterOpenMonitoringPrometheus[];
  }

  function mskClusterOpenMonitoringToTerraform(struct?: MskClusterOpenMonitoring): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      prometheus: cdktf.listMapper(mskClusterOpenMonitoringPrometheusToTerraform)(struct!.prometheus),
    }
  }

  export interface MskClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#create MskCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#delete MskCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html#update MskCluster#update}
    */
    readonly update?: string;
  }

  function mskClusterTimeoutsToTerraform(struct?: MskClusterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster}
  */
  export class MskCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_cluster.html aws_msk_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskClusterConfig
    */
    public constructor(scope: Construct, id: string, config: MskClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._enhancedMonitoring = config.enhancedMonitoring;
      this._kafkaVersion = config.kafkaVersion;
      this._numberOfBrokerNodes = config.numberOfBrokerNodes;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._brokerNodeGroupInfo = config.brokerNodeGroupInfo;
      this._clientAuthentication = config.clientAuthentication;
      this._configurationInfo = config.configurationInfo;
      this._encryptionInfo = config.encryptionInfo;
      this._loggingInfo = config.loggingInfo;
      this._openMonitoring = config.openMonitoring;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bootstrap_brokers - computed: true, optional: false, required: false
    public get bootstrapBrokers() {
      return this.getStringAttribute('bootstrap_brokers');
    }

    // bootstrap_brokers_sasl_iam - computed: true, optional: false, required: false
    public get bootstrapBrokersSaslIam() {
      return this.getStringAttribute('bootstrap_brokers_sasl_iam');
    }

    // bootstrap_brokers_sasl_scram - computed: true, optional: false, required: false
    public get bootstrapBrokersSaslScram() {
      return this.getStringAttribute('bootstrap_brokers_sasl_scram');
    }

    // bootstrap_brokers_tls - computed: true, optional: false, required: false
    public get bootstrapBrokersTls() {
      return this.getStringAttribute('bootstrap_brokers_tls');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // current_version - computed: true, optional: false, required: false
    public get currentVersion() {
      return this.getStringAttribute('current_version');
    }

    // enhanced_monitoring - computed: false, optional: true, required: false
    private _enhancedMonitoring?: string;
    public get enhancedMonitoring() {
      return this.getStringAttribute('enhanced_monitoring');
    }
    public set enhancedMonitoring(value: string ) {
      this._enhancedMonitoring = value;
    }
    public resetEnhancedMonitoring() {
      this._enhancedMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedMonitoringInput() {
      return this._enhancedMonitoring
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kafka_version - computed: false, optional: false, required: true
    private _kafkaVersion: string;
    public get kafkaVersion() {
      return this.getStringAttribute('kafka_version');
    }
    public set kafkaVersion(value: string) {
      this._kafkaVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaVersionInput() {
      return this._kafkaVersion
    }

    // number_of_broker_nodes - computed: false, optional: false, required: true
    private _numberOfBrokerNodes: number;
    public get numberOfBrokerNodes() {
      return this.getNumberAttribute('number_of_broker_nodes');
    }
    public set numberOfBrokerNodes(value: number) {
      this._numberOfBrokerNodes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfBrokerNodesInput() {
      return this._numberOfBrokerNodes
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

    // zookeeper_connect_string - computed: true, optional: false, required: false
    public get zookeeperConnectString() {
      return this.getStringAttribute('zookeeper_connect_string');
    }

    // zookeeper_connect_string_tls - computed: true, optional: false, required: false
    public get zookeeperConnectStringTls() {
      return this.getStringAttribute('zookeeper_connect_string_tls');
    }

    // broker_node_group_info - computed: false, optional: false, required: true
    private _brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo[];
    public get brokerNodeGroupInfo() {
      return this.interpolationForAttribute('broker_node_group_info') as any;
    }
    public set brokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo[]) {
      this._brokerNodeGroupInfo = value;
    }
    // Temporarily expose input value. Use with caution.
    public get brokerNodeGroupInfoInput() {
      return this._brokerNodeGroupInfo
    }

    // client_authentication - computed: false, optional: true, required: false
    private _clientAuthentication?: MskClusterClientAuthentication[];
    public get clientAuthentication() {
      return this.interpolationForAttribute('client_authentication') as any;
    }
    public set clientAuthentication(value: MskClusterClientAuthentication[] ) {
      this._clientAuthentication = value;
    }
    public resetClientAuthentication() {
      this._clientAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAuthenticationInput() {
      return this._clientAuthentication
    }

    // configuration_info - computed: false, optional: true, required: false
    private _configurationInfo?: MskClusterConfigurationInfo[];
    public get configurationInfo() {
      return this.interpolationForAttribute('configuration_info') as any;
    }
    public set configurationInfo(value: MskClusterConfigurationInfo[] ) {
      this._configurationInfo = value;
    }
    public resetConfigurationInfo() {
      this._configurationInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInfoInput() {
      return this._configurationInfo
    }

    // encryption_info - computed: false, optional: true, required: false
    private _encryptionInfo?: MskClusterEncryptionInfo[];
    public get encryptionInfo() {
      return this.interpolationForAttribute('encryption_info') as any;
    }
    public set encryptionInfo(value: MskClusterEncryptionInfo[] ) {
      this._encryptionInfo = value;
    }
    public resetEncryptionInfo() {
      this._encryptionInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionInfoInput() {
      return this._encryptionInfo
    }

    // logging_info - computed: false, optional: true, required: false
    private _loggingInfo?: MskClusterLoggingInfo[];
    public get loggingInfo() {
      return this.interpolationForAttribute('logging_info') as any;
    }
    public set loggingInfo(value: MskClusterLoggingInfo[] ) {
      this._loggingInfo = value;
    }
    public resetLoggingInfo() {
      this._loggingInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInfoInput() {
      return this._loggingInfo
    }

    // open_monitoring - computed: false, optional: true, required: false
    private _openMonitoring?: MskClusterOpenMonitoring[];
    public get openMonitoring() {
      return this.interpolationForAttribute('open_monitoring') as any;
    }
    public set openMonitoring(value: MskClusterOpenMonitoring[] ) {
      this._openMonitoring = value;
    }
    public resetOpenMonitoring() {
      this._openMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openMonitoringInput() {
      return this._openMonitoring
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: MskClusterTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: MskClusterTimeouts ) {
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
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        enhanced_monitoring: cdktf.stringToTerraform(this._enhancedMonitoring),
        kafka_version: cdktf.stringToTerraform(this._kafkaVersion),
        number_of_broker_nodes: cdktf.numberToTerraform(this._numberOfBrokerNodes),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        broker_node_group_info: cdktf.listMapper(mskClusterBrokerNodeGroupInfoToTerraform)(this._brokerNodeGroupInfo),
        client_authentication: cdktf.listMapper(mskClusterClientAuthenticationToTerraform)(this._clientAuthentication),
        configuration_info: cdktf.listMapper(mskClusterConfigurationInfoToTerraform)(this._configurationInfo),
        encryption_info: cdktf.listMapper(mskClusterEncryptionInfoToTerraform)(this._encryptionInfo),
        logging_info: cdktf.listMapper(mskClusterLoggingInfoToTerraform)(this._loggingInfo),
        open_monitoring: cdktf.listMapper(mskClusterOpenMonitoringToTerraform)(this._openMonitoring),
        timeouts: mskClusterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface MskConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#description MskConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#kafka_versions MskConfiguration#kafka_versions}
    */
    readonly kafkaVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#name MskConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html#server_properties MskConfiguration#server_properties}
    */
    readonly serverProperties: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html aws_msk_configuration}
  */
  export class MskConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_configuration.html aws_msk_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: MskConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._kafkaVersions = config.kafkaVersions;
      this._name = config.name;
      this._serverProperties = config.serverProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string ) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kafka_versions - computed: false, optional: true, required: false
    private _kafkaVersions?: string[];
    public get kafkaVersions() {
      return this.getListAttribute('kafka_versions');
    }
    public set kafkaVersions(value: string[] ) {
      this._kafkaVersions = value;
    }
    public resetKafkaVersions() {
      this._kafkaVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaVersionsInput() {
      return this._kafkaVersions
    }

    // latest_revision - computed: true, optional: false, required: false
    public get latestRevision() {
      return this.getNumberAttribute('latest_revision');
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

    // server_properties - computed: false, optional: false, required: true
    private _serverProperties: string;
    public get serverProperties() {
      return this.getStringAttribute('server_properties');
    }
    public set serverProperties(value: string) {
      this._serverProperties = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverPropertiesInput() {
      return this._serverProperties
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        kafka_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._kafkaVersions),
        name: cdktf.stringToTerraform(this._name),
        server_properties: cdktf.stringToTerraform(this._serverProperties),
      };
    }
  }
  export interface MskScramSecretAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html#cluster_arn MskScramSecretAssociation#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html#secret_arn_list MskScramSecretAssociation#secret_arn_list}
    */
    readonly secretArnList: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association}
  */
  export class MskScramSecretAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_scram_secret_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskScramSecretAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: MskScramSecretAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_scram_secret_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterArn = config.clusterArn;
      this._secretArnList = config.secretArnList;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn: string;
    public get clusterArn() {
      return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
      this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
      return this._clusterArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // secret_arn_list - computed: false, optional: false, required: true
    private _secretArnList: string[];
    public get secretArnList() {
      return this.getListAttribute('secret_arn_list');
    }
    public set secretArnList(value: string[]) {
      this._secretArnList = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnListInput() {
      return this._secretArnList
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_arn: cdktf.stringToTerraform(this._clusterArn),
        secret_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._secretArnList),
      };
    }
  }
  export interface DataAwsMskBrokerNodesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html#cluster_arn DataAwsMskBrokerNodes#cluster_arn}
    */
    readonly clusterArn: string;
  }
  export class DataAwsMskBrokerNodesNodeInfoList extends cdktf.ComplexComputedList {

    // attached_eni_id - computed: true, optional: false, required: false
    public get attachedEniId() {
      return this.getStringAttribute('attached_eni_id');
    }

    // broker_id - computed: true, optional: false, required: false
    public get brokerId() {
      return this.getNumberAttribute('broker_id');
    }

    // client_subnet - computed: true, optional: false, required: false
    public get clientSubnet() {
      return this.getStringAttribute('client_subnet');
    }

    // client_vpc_ip_address - computed: true, optional: false, required: false
    public get clientVpcIpAddress() {
      return this.getStringAttribute('client_vpc_ip_address');
    }

    // endpoints - computed: true, optional: false, required: false
    public get endpoints() {
      return this.getListAttribute('endpoints');
    }

    // node_arn - computed: true, optional: false, required: false
    public get nodeArn() {
      return this.getStringAttribute('node_arn');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes}
  */
  export class DataAwsMskBrokerNodes extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_broker_nodes";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes.html aws_msk_broker_nodes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskBrokerNodesConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsMskBrokerNodesConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_broker_nodes',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterArn = config.clusterArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn: string;
    public get clusterArn() {
      return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
      this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
      return this._clusterArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // node_info_list - computed: true, optional: false, required: false
    public nodeInfoList(index: string) {
      return new DataAwsMskBrokerNodesNodeInfoList(this, 'node_info_list', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      };
    }
  }
  export interface DataAwsMskClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html#cluster_name DataAwsMskCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html#tags DataAwsMskCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html aws_msk_cluster}
  */
  export class DataAwsMskCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster.html aws_msk_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsMskClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // bootstrap_brokers - computed: true, optional: false, required: false
    public get bootstrapBrokers() {
      return this.getStringAttribute('bootstrap_brokers');
    }

    // bootstrap_brokers_sasl_iam - computed: true, optional: false, required: false
    public get bootstrapBrokersSaslIam() {
      return this.getStringAttribute('bootstrap_brokers_sasl_iam');
    }

    // bootstrap_brokers_sasl_scram - computed: true, optional: false, required: false
    public get bootstrapBrokersSaslScram() {
      return this.getStringAttribute('bootstrap_brokers_sasl_scram');
    }

    // bootstrap_brokers_tls - computed: true, optional: false, required: false
    public get bootstrapBrokersTls() {
      return this.getStringAttribute('bootstrap_brokers_tls');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kafka_version - computed: true, optional: false, required: false
    public get kafkaVersion() {
      return this.getStringAttribute('kafka_version');
    }

    // number_of_broker_nodes - computed: true, optional: false, required: false
    public get numberOfBrokerNodes() {
      return this.getNumberAttribute('number_of_broker_nodes');
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

    // zookeeper_connect_string - computed: true, optional: false, required: false
    public get zookeeperConnectString() {
      return this.getStringAttribute('zookeeper_connect_string');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsMskConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html#name DataAwsMskConfiguration#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html aws_msk_configuration}
  */
  export class DataAwsMskConfiguration extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_configuration.html aws_msk_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsMskConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kafka_versions - computed: true, optional: false, required: false
    public get kafkaVersions() {
      return this.getListAttribute('kafka_versions');
    }

    // latest_revision - computed: true, optional: false, required: false
    public get latestRevision() {
      return this.getNumberAttribute('latest_revision');
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

    // server_properties - computed: true, optional: false, required: false
    public get serverProperties() {
      return this.getStringAttribute('server_properties');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsMskKafkaVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html#preferred_versions DataAwsMskKafkaVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html#version DataAwsMskKafkaVersion#version}
    */
    readonly version?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version}
  */
  export class DataAwsMskKafkaVersion extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_msk_kafka_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskKafkaVersionConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsMskKafkaVersionConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_msk_kafka_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._preferredVersions = config.preferredVersions;
      this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // preferred_versions - computed: false, optional: true, required: false
    private _preferredVersions?: string[];
    public get preferredVersions() {
      return this.getListAttribute('preferred_versions');
    }
    public set preferredVersions(value: string[] ) {
      this._preferredVersions = value;
    }
    public resetPreferredVersions() {
      this._preferredVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredVersionsInput() {
      return this._preferredVersions
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // version - computed: true, optional: true, required: false
    private _version?: string;
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
}
