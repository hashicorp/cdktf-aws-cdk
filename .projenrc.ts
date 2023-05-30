/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { CdktfAwsCdkProject } from "./projen";

const githubActionPinnedVersions = {
  "actions/checkout": "8e5e7e5ab8b370d6c329ec480221332ada57f0ab", // v3.5.2
  "actions/upload-artifact": "0b7f8abb1508181956e8e162db84b466c27e18ce", // v3.1.2
  "actions/download-artifact": "9bc31d5ccc31df68ecc42ccf4149144866c47d8a", // v3.0.2
  "dessant/lock-threads": "c1b35aecc5cdb1a34539d14196df55838bb2f836", // v4.0.0
  "amannn/action-semantic-pull-request":
    "c3cd5d1ea3580753008872425915e343e351ab54", // v5.2.0
  "actions/setup-node": "64ed1c7eab4cce3362f8c340dee64e5eaeef8f7c", // v3.6.0
  "actions/stale": "1160a2240286f5da8ec72b1c0816ce2481aabf84", // v8.0.0
  "peter-evans/create-pull-request": "284f54f989303d2699d373481a0cfa13ad5a6666", // v5.0.1
  "pascalgn/automerge-action": "22948e0bc22f0aa673800da838595a3e7347e584", // v0.15.6
};

const project = new CdktfAwsCdkProject({
  terraformProvider: "aws@~> 3.0",
  cdktfVersion: "0.16.1",
  constructsVersion: "^10.0.25",
  minNodeVersion: "16.14.0",
  projenrcTs: true,
});

project.package.addPackageResolutions("@types/babel__traverse@7.18.2");

// Use pinned versions of github actions
Object.entries(githubActionPinnedVersions).forEach(([name, sha]) => {
  project.github?.actions.set(name, `${name}@${sha}`);
});

project.synth();
