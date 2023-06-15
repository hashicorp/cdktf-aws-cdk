#!/bin/bash

set -ex

PROJECT_ROOT=$(cd "$(dirname "${BASH_SOURCE:-$0}")/.." && pwd)
CDKTF_VERSION=$1

echo "Updating main level cdktf version $CDKTF_VERSION"
yarn
sed -i "s/cdktfVersion: ".*",/cdktfVersion: \"$CDKTF_VERSION\",/" "$PROJECT_ROOT/.projenrc.ts"
npx projen

echo "Updating examples"
# Loop through all examples and update the cdktf version
for example in $(find "$PROJECT_ROOT/examples" -mindepth 1 -maxdepth 1 -type d); do
  echo "Updating example $example"
  cd "$example"
  yarn
  yarn add -D cdktf-cli@$CDKTF_VERSION
  yarn add cdktf@$CDKTF_VERSION
done

echo "Done"