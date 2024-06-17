/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { CdktfAwsCdkProject } from "./projenrc";

const githubActionPinnedVersions = {
  "actions/checkout": "a5ac7e51b41094c92402da3b24376905380afc29", // v4.1.6
  "actions/download-artifact": "65a9edc5881444af0b9093a5e628f2fe47ea3b2e", // v4.1.7
  "actions/github-script": "60a0d83039c74a4aee543508d2ffcb1c3799cdea", // v7.0.1
  "actions/setup-node": "60edb5dd545a775178f52524783378180af0d1f8", // v4.0.2
  "actions/stale": "28ca1036281a5e5922ead5184a1bbf96e5fc984e", // v9.0.0
  "actions/upload-artifact": "65462800fd760344b1a7b4382951275a0abb4808", // v4.3.3
  "amannn/action-semantic-pull-request":
    "cfb60706e18bc85e8aec535e3c577abe8f70378e", // v5.5.2
  "dessant/lock-threads": "1bf7ec25051fe7c00bdd17e6a7cf3d7bfb7dc771", // v5.0.1
  "peter-evans/create-pull-request": "6d6857d36972b65feb161a90e484f2984215f83e", // v6.0.5
};

const project = new CdktfAwsCdkProject({
  terraformProvider: "aws@~> 3.0",
  cdktfVersion: "0.20.0",
  constructsVersion: "10.0.25",
  jsiiVersion: "~5.2.0",
  minNodeVersion: "18.12.0",
  projenrcTs: true,
});

project.package.addPackageResolutions("@types/babel__traverse@7.18.2");

// Use pinned versions of github actions
Object.entries(githubActionPinnedVersions).forEach(([name, sha]) => {
  project.github?.actions.set(name, `${name}@${sha}`);
});

project.synth();
