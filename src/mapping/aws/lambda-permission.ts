//

import { createGuessingResourceMapper } from "../helper";
import { registerMapping } from "../index";
import { LambdaFunction } from "../../aws";

registerMapping("AWS::Lambda::Permission", {
  resource: createGuessingResourceMapper(LambdaFunction.LambdaPermission),
  attributes: {
    Ref: (permission: LambdaFunction.LambdaPermission) => permission.id,
  },
});
