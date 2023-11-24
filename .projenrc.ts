/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { CdktfAwsCdkProject } from "./projenrc";

const githubActionPinnedVersions = {
  "actions/checkout": "b4ffde65f46336ab88eb53be808477a3936bae11", // v4.1.1
  "actions/download-artifact": "9bc31d5ccc31df68ecc42ccf4149144866c47d8a", // v3.0.2
  "actions/github-script": "60a0d83039c74a4aee543508d2ffcb1c3799cdea", // v7.0.1
  "actions/setup-node": "8f152de45cc393bb48ce5d89d36b731f54556e65", // v4.0.0
  "actions/stale": "1160a2240286f5da8ec72b1c0816ce2481aabf84", // v8.0.0
  "actions/upload-artifact": "a8a3f3ad30e3422c9c7b888a15615d19a852ae32", // v3.1.3
  "amannn/action-semantic-pull-request":
    "e9fabac35e210fea40ca5b14c0da95a099eff26f", // v5.4.0
  "dessant/lock-threads": "d42e5f49803f3c4e14ffee0378e31481265dda22", // v5.0.0
  "peter-evans/create-pull-request": "153407881ec5c347639a548ade7d8ad1d6740e38", // v5.0.2
};

const project = new CdktfAwsCdkProject({
  terraformProvider: "aws@~> 3.0",
  cdktfVersion: "0.19.0",
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
