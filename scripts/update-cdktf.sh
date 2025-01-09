#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0

set -ex

PROJECT_ROOT=$(cd "$(dirname "${BASH_SOURCE:-$0}")/.." && pwd)
CDKTF_VERSION=$1
CONSTRUCTS_VERSION=$2

if [ -z "$CDKTF_VERSION" ]; then
  echo "Usage: $0 <cdktf-version> <constructs-version>"
  exit 1
fi
if [ -z "$CONSTRUCTS_VERSION" ]; then
  echo "Usage: $0 <cdktf-version> <constructs-version>"
  exit 1
fi

echo "Updating main level cdktf version $CDKTF_VERSION and constructs version $CONSTRUCTS_VERSION"
yarn
sed -i "s/cdktfVersion: \".*\",/cdktfVersion: \"$CDKTF_VERSION\",/" "$PROJECT_ROOT/.projenrc.ts"
sed -i "s/constructsVersion: \".*\",/constructsVersion: \"$CONSTRUCTS_VERSION\",/" "$PROJECT_ROOT/.projenrc.ts"
CI=0 npx projen

echo "Updating examples"
# Loop through all examples and update the cdktf version
for example in $(find "$PROJECT_ROOT/examples" -mindepth 1 -maxdepth 1 -type d); do
  echo "Updating example $example to cdktf version $CDKTF_VERSION and constructs version $CONSTRUCTS_VERSION"
  cd "$example"
  npm install
  npm install --save-exact -D cdktf-cli@$CDKTF_VERSION
  npm install --save-exact cdktf@$CDKTF_VERSION constructs@^$CONSTRUCTS_VERSION
done

echo "Updating README"
sed -i 's/`cdktf` >= .*/`cdktf` >= '"$CDKTF_VERSION"'/' "$PROJECT_ROOT/README.md"
sed -i 's/`constructs` >= .*/`constructs` >= '"$CONSTRUCTS_VERSION"'/' "$PROJECT_ROOT/README.md"

echo "Done"
