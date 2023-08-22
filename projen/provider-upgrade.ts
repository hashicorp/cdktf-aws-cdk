/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Checks for new versions of the given provider and creates a PR with an upgrade change if there are changes.
 */
export class ProviderUpgrade {
  constructor(project: javascript.NodeProject) {
    const workflow = project.github?.addWorkflow("provider-upgrade");

    if (!workflow) throw new Error("no workflow defined");

    workflow.on({
      schedule: [{ cron: "6 21 * * 0" }], // Run once a week on Sundays
      workflowDispatch: {}, // allow manual triggering
    });

    workflow.addJobs({
      upgrade: {
        name: "Upgrade Terraform providers",
        runsOn: ["ubuntu-latest"],
        steps: [
          {
            name: "Checkout",
            uses: "actions/checkout@v2",
          },
          { run: "yarn install" },
          { run: "yarn fetch" },
          // generate docs
          { run: "yarn compile" },
          { run: "yarn docgen" },

          // submit a PR
          {
            name: "Create Pull Request",
            uses: "peter-evans/create-pull-request@v3",
            with: {
              "commit-message": "feat: upgrade providers",
              branch: "auto/provider-upgrade",
              base: "main",
              title: "feat: upgrade providers",
              body:
                "This PR upgrades the AWS and Time providers to the latest version, which may or may not result in new features.",
              labels: "automerge",
              token: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
              author: "team-tf-cdk <github-team-tf-cdk@hashicorp.com>",
              committer: "team-tf-cdk <github-team-tf-cdk@hashicorp.com>",
              signoff: true,
              "delete-branch": true,
            },
          },
        ],
        env: {
          CI: "true",
          CHECKPOINT_DISABLE: "1",
        },
        permissions: {
          contents: JobPermission.READ,
        },
      },
    });
  }
}
