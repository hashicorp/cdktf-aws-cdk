import { registerMapping } from "../index";
import { IamPolicy } from "../../aws/iam-policy";
import { IamRolePolicyAttachment } from "../../aws/iam-role-policy-attachment";
import { IamUserPolicyAttachment } from "../../aws/iam-user-policy-attachment";
import { IamGroupPolicyAttachment } from "../../aws/iam-group-policy-attachment";
import { createGuessingResourceMapper } from "../helper";
import { Fn } from "cdktf";

registerMapping("AWS::IAM::Policy", {
  resource: (scope, id, props) => {
    // An AWS::IAM::Policy supports specifying roles, users and groups that this policy should
    // be attached to (https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-roles)
    const roleAttachments: any[] = props.Roles || [];
    const userAttachments: any[] = props.Users || [];
    const groupAttachments: any[] = props.Groups || [];
    
    const resource = createGuessingResourceMapper(IamPolicy, {
      PolicyDocument: (doc) => ({
        tfAttributeName: "policy",
        value: Fn.jsonencode(doc),
      }),
      // ignore these props for the iam_policy resource, we handle them below
      Roles: null,
      Users: null,
      Groups: null,
    })(scope, id, props);

    roleAttachments.forEach((roleArn, idx) => {
      new IamRolePolicyAttachment(scope, `${id}_role${idx}`, {
        policyArn: resource!.arn,
        role: roleArn,
      });
    });

    userAttachments.forEach((userArn, idx) => {
      new IamUserPolicyAttachment(scope, `${id}_user${idx}`, {
        policyArn: resource!.arn,
        user: userArn,
      });
    });

    groupAttachments.forEach((groupArn, idx) => {
      new IamGroupPolicyAttachment(scope, `${id}_group${idx}`, {
        policyArn: resource!.arn,
        group: groupArn,
      });
    });

    return resource;
  },
  attributes: {
    Arn: (policy: IamPolicy) => policy.arn,
    Ref: (policy: IamPolicy) => policy.id,
  },
});
