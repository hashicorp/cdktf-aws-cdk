import { registerMapping } from "../index";
import { IAM } from "../../aws";
import { createGuessingResourceMapper } from "../helper";
import { Fn } from "cdktf";

registerMapping("AWS::IAM::Policy", {
  resource: createGuessingResourceMapper(IAM.IamPolicy, {
    PolicyDocument: (doc) => ({
      tfAttributeName: "policy",
      value: Fn.jsonencode(doc),
    }),
  }),
  attributes: {
    Arn: (policy: IAM.IamPolicy) => policy.arn,
    Ref: (policy: IAM.IamPolicy) => policy.id,
  },
});
