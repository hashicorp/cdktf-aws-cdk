// source: https://github.com/cdktf-plus/cdktf-plus/blob/586aabad3ab2fb2a2e93e05ed33f94474ebe9397/packages/%40cdktf-plus/aws/lib/aws-iam/index.ts
import { PolicyStatement } from 'iam-floyd';
import { Construct } from 'constructs';
import { Resource, Lazy, IResolveContext } from 'cdktf';
import { IamRole, IamPolicy, IamRolePolicyAttachment } from '@cdktf/aws-cdk/lib/aws/iam';
import * as iam from 'iam-floyd';

export class Policy {
  public static document(statement: PolicyStatement): string {
    return JSON.stringify({
      'Version': "2012-10-17",
      "Statement": [statement]
    })
  }
}

export interface AwsServiceRoleOptions {
  readonly name?: string
  readonly service: string | string[]
  readonly policyStatements: iam.PolicyStatement[]
}

export class AwsServiceRole extends Resource {
  public readonly role: IamRole
  private readonly policyStatements: iam.PolicyStatement[] = [];

  constructor(scope: Construct, id: string, props: AwsServiceRoleOptions) {
    super(scope, id)

    const { service } = props;

    const name = this.node.addr;

    this.policyStatements = props.policyStatements;

    const statement = new iam.Sts()
      .allow()
      .toAssumeRole()
      .to('sts:SetSourceIdentity')

    if (Array.isArray(service)) {
      for (const s of service) {
        statement.forService(s)
      }
    } else {
      statement.forService(service)
    }

    this.role = new IamRole(this, `role`, {
      name,
      assumeRolePolicy: Policy.document(statement.toJSON())
    })

    const notesPolicy = new IamPolicy(this, `role-policy`, {
      name: `${name}-role-policy`,
      path: '/',
      policy: Lazy.stringValue({
        produce: (_context: IResolveContext) => {
          return JSON.stringify({
            Version: '2012-10-17',
            Statement: this.policyStatements
          })
        }
      })
    })

    new IamRolePolicyAttachment(this, `PolicyAttachment`, {
      policyArn: notesPolicy.arn,
      role: this.role.name!
    })
  }

  public addPolicyStatements(...statements: iam.PolicyStatement[]) {
    this.policyStatements.push(...statements);
  }
}