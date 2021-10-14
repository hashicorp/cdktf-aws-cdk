//

import { createGuessingResourceMapper } from "../helper";
import { registerMapping } from "../index";
import { Lambda } from "../../aws";

registerMapping("AWS::Lambda::Permission", {
  resource: createGuessingResourceMapper(Lambda.LambdaPermission),
  attributes: {
    Ref: (permission: Lambda.LambdaPermission) => permission.id,
  },
});
