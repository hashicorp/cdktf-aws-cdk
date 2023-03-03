/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { ResourceMapper } from "../mapping";
import { TerraformResource } from "cdktf";
declare type Class<T> = new (...args: any[]) => T;
declare type PropertyMappingFunc = (value: any) => {
    tfAttributeName: string;
    value: any;
};
declare type PropertyMapping = string | PropertyMappingFunc;
declare type PropertyMappings = {
    [cfnProperty: string]: PropertyMapping;
};
export declare function createGuessingResourceMapper<T extends TerraformResource>(Resource: Class<T>, propMappings?: PropertyMappings): ResourceMapper<T>;
export {};
