import { registerMapping } from "../index";
import { IAM } from "../../aws/IAM";
import { createGuessingResourceMapper } from "../helper";
import { Aspects, Fn } from "cdktf";
import { EventualConsistencyWorkaroundAspect } from "../EventualConsistencyWorkaroundAspect";

registerMapping("AWS::IAM::Role", {
  resource: (scope, id, props) => {
    const resource = createGuessingResourceMapper(IAM.IamRole, {
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
    Arn: (role: IAM.IamRole) => role.arn,
    Ref: (role: IAM.IamRole) => role.id,
  },
});
