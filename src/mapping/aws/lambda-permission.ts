/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { createGuessingResourceMapper } from "../helper";
import { registerMapping } from "../index";
import { LambdaPermission } from "../../aws/lambda-permission";

registerMapping("AWS::Lambda::Permission", {
  resource: createGuessingResourceMapper(LambdaPermission),
  attributes: {
    Ref: (permission: LambdaPermission) => permission.id,
  },
});
