/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const generate = () => Math.random().toString(36).substring(7);

export const handler = async () => ({ value: generate() });