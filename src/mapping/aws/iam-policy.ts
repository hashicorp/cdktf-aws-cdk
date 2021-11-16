import { registerMapping } from "../index";
import { iam } from "../../aws";
import { createGuessingResourceMapper } from "../helper";
import { Fn } from "cdktf";

registerMapping("AWS::IAM::Policy", {
  resource: createGuessingResourceMapper(iam.IamPolicy, {
    PolicyDocument: (doc) => ({
      tfAttributeName: "policy",
      value: Fn.jsonencode(doc),
    }),
  }),
  attributes: {
    Arn: (policy: iam.IamPolicy) => policy.arn,
    Ref: (policy: iam.IamPolicy) => policy.id,
  },
});
