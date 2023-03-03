/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

export const handler = async (state: { value: string }) => ({
  value: state.value.split("").reverse().join(""),
});
