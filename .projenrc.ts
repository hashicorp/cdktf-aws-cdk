/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { CdktfAwsCdkProject } from "./projen";

const githubActionPinnedVersions = {
  "actions/checkout": "8e5e7e5ab8b370d6c329ec480221332ada57f0ab", // v3.5.2
  "actions/upload-artifact": "0b7f8abb1508181956e8e162db84b466c27e18ce", // v3.1.2
  "dessant/lock-threads": "c1b35aecc5cdb1a34539d14196df55838bb2f836", // v4.0.0
  "amannn/action-semantic-pull-request": "v5.0.2",
  "actions/setup-node": "64ed1c7eab4cce3362f8c340dee64e5eaeef8f7c", // v3.6.0
  "actions/stale": "v4",
  "peter-evans/create-pull-request": "2b011faafdcbc9ceb11414d64d0573f37c774b04", // v4.2.3
  "pascalgn/automerge-action": "v0.14.2",
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
