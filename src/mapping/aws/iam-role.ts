import { registerMapping } from "../index";
import { IamRole } from "../../aws/iam-role";
import { createGuessingResourceMapper } from "../helper";
import { Aspects, Fn } from "cdktf";
import { EventualConsistencyWorkaroundAspect } from "../EventualConsistencyWorkaroundAspect";

registerMapping("AWS::IAM::Role", {
  resource: (scope, id, props) => {
    const resource = createGuessingResourceMapper(IamRole, {
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
    Arn: (role: IamRole) => role.arn,
    Ref: (role: IamRole) => role.id,
  },
});
