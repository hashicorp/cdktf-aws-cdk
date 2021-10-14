// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glacier
*/
export namespace Glacier {
  export interface GlacierVaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#access_policy GlacierVault#access_policy}
    */
    readonly accessPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#name GlacierVault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#tags GlacierVault#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#tags_all GlacierVault#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * notification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#notification GlacierVault#notification}
    */
    readonly notification?: GlacierVaultNotification[];
  }
  export interface GlacierVaultNotification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#events GlacierVault#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html#sns_topic GlacierVault#sns_topic}
    */
    readonly snsTopic: string;
  }

  function glacierVaultNotificationToTerraform(struct?: GlacierVaultNotification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
      sns_topic: cdktf.stringToTerraform(struct!.snsTopic),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html aws_glacier_vault}
  */
  export class GlacierVault extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glacier_vault";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault.html aws_glacier_vault} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlacierVaultConfig
    */
    public constructor(scope: Construct, id: string, config: GlacierVaultConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glacier_vault',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessPolicy = config.accessPolicy;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._notification = config.notification;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_policy - computed: false, optional: true, required: false
    private _accessPolicy?: string;
    public get accessPolicy() {
      return this.getStringAttribute('access_policy');
    }
    public set accessPolicy(value: string ) {
      this._accessPolicy = value;
    }
    public resetAccessPolicy() {
      this._accessPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPolicyInput() {
      return this._accessPolicy
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // location - computed: true, optional: false, required: false
    public get location() {
      return this.getStringAttribute('location');
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

    // notification - computed: false, optional: true, required: false
    private _notification?: GlacierVaultNotification[];
    public get notification() {
      return this.interpolationForAttribute('notification') as any;
    }
    public set notification(value: GlacierVaultNotification[] ) {
      this._notification = value;
    }
    public resetNotification() {
      this._notification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationInput() {
      return this._notification
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_policy: cdktf.stringToTerraform(this._accessPolicy),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        notification: cdktf.listMapper(glacierVaultNotificationToTerraform)(this._notification),
      };
    }
  }
  export interface GlacierVaultLockConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#complete_lock GlacierVaultLock#complete_lock}
    */
    readonly completeLock: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#ignore_deletion_error GlacierVaultLock#ignore_deletion_error}
    */
    readonly ignoreDeletionError?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#policy GlacierVaultLock#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html#vault_name GlacierVaultLock#vault_name}
    */
    readonly vaultName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html aws_glacier_vault_lock}
  */
  export class GlacierVaultLock extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_glacier_vault_lock";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glacier_vault_lock.html aws_glacier_vault_lock} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlacierVaultLockConfig
    */
    public constructor(scope: Construct, id: string, config: GlacierVaultLockConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_glacier_vault_lock',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._completeLock = config.completeLock;
      this._ignoreDeletionError = config.ignoreDeletionError;
      this._policy = config.policy;
      this._vaultName = config.vaultName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // complete_lock - computed: false, optional: false, required: true
    private _completeLock: boolean | cdktf.IResolvable;
    public get completeLock() {
      return this.getBooleanAttribute('complete_lock');
    }
    public set completeLock(value: boolean | cdktf.IResolvable) {
      this._completeLock = value;
    }
    // Temporarily expose input value. Use with caution.
    public get completeLockInput() {
      return this._completeLock
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ignore_deletion_error - computed: false, optional: true, required: false
    private _ignoreDeletionError?: boolean | cdktf.IResolvable;
    public get ignoreDeletionError() {
      return this.getBooleanAttribute('ignore_deletion_error');
    }
    public set ignoreDeletionError(value: boolean | cdktf.IResolvable ) {
      this._ignoreDeletionError = value;
    }
    public resetIgnoreDeletionError() {
      this._ignoreDeletionError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreDeletionErrorInput() {
      return this._ignoreDeletionError
    }

    // policy - computed: false, optional: false, required: true
    private _policy: string;
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // vault_name - computed: false, optional: false, required: true
    private _vaultName: string;
    public get vaultName() {
      return this.getStringAttribute('vault_name');
    }
    public set vaultName(value: string) {
      this._vaultName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vaultNameInput() {
      return this._vaultName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        complete_lock: cdktf.booleanToTerraform(this._completeLock),
        ignore_deletion_error: cdktf.booleanToTerraform(this._ignoreDeletionError),
        policy: cdktf.stringToTerraform(this._policy),
        vault_name: cdktf.stringToTerraform(this._vaultName),
      };
    }
  }
}
