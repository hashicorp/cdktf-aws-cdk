#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -ex

PROJECT_ROOT=$(cd "$(dirname "${BASH_SOURCE:-$0}")/.." && pwd)
NODE_VERSION=$1
NODE_VERSION_SHORT=$(cut -d "." -f 1 <<< "$NODE_VERSION")

echo "Updating main level Node.js version $NODE_VERSION"
yarn
sed -i "s/minNodeVersion: \".*\",/minNodeVersion: \"$NODE_VERSION\",/" "$PROJECT_ROOT/.projenrc.ts"
CI=0 npx projen

echo "Updating examples"
# Loop through all examples and update the node version
for example in $(find "$PROJECT_ROOT/examples" -mindepth 1 -maxdepth 1 -type d); do
  echo "Updating example $example"
  cd "$example"
  npm pkg set engines.node=">= $NODE_VERSION"
  yarn
  yarn add -D @types/node@^$NODE_VERSION_SHORT
done

echo "Updating README"
sed -i 's/`node` >= .*/`node` >= '"$NODE_VERSION"'/' "$PROJECT_ROOT/README.md"

echo "Done"
