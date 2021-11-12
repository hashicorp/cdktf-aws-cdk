//

import { createGuessingResourceMapper } from "../helper";
import { registerMapping } from "../index";
import { lambdafunction } from "../../aws";

registerMapping("AWS::Lambda::Permission", {
  resource: createGuessingResourceMapper(lambdafunction.LambdaPermission),
  attributes: {
    Ref: (permission: lambdafunction.LambdaPermission) => permission.id,
  },
});
