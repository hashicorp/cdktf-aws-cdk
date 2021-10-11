import { registerMapping } from "../index";
import { IamPolicy } from "../../aws";
import { createGuessingResourceMapper } from "../helper";

registerMapping("AWS::IAM::Policy", {
  resource: createGuessingResourceMapper(IamPolicy, {
    PolicyDocument: (doc) => ({
      tfAttributeName: "policy",
      value: JSON.stringify(doc),
    }),
  }),
  attributes: {
    Arn: (policy: IamPolicy) => policy.arn,
    Ref: (policy: IamPolicy) => policy.id,
  },
});
