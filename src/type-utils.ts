/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
