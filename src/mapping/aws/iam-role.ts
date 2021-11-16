import { registerMapping } from "../index";
import { iam } from "../../aws";
import { createGuessingResourceMapper } from "../helper";
import { Aspects, Fn } from "cdktf";
import { EventualConsistencyWorkaroundAspect } from "../EventualConsistencyWorkaroundAspect";

registerMapping("AWS::IAM::Role", {
  resource: (scope, id, props) => {
    const resource = createGuessingResourceMapper(iam.IamRole, {
      AssumeRolePolicyDocument: (doc) => ({
        tfAttributeName: "assumeRolePolicy",
        value: Fn.jsonencode(doc),
      }),
    })(scope, id, props);

    // add Aspect for working around eventual consistency issues
    if (resource)
      Aspects.of(scope).add(new EventualConsistencyWorkaroundAspect(resource));

    return resource;
  },

  attributes: {
    Arn: (role: iam.IamRole) => role.arn,
    Ref: (role: iam.IamRole) => role.id,
  },
});
