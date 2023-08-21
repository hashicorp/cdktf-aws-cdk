/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from 'projen';

/**
 * Merges PRs with the "automerge" label
 */
export class AutoMerge {
  constructor(project: javascript.NodeProject) {
    const workflow = project.github?.addWorkflow("automerge");

    if (!workflow) throw new Error("no workflow defined");

    workflow.on({
      pullRequestTarget: {
        types: [
          "opened",
          "labeled",
          "ready_for_review",
          "reopened",
          "synchronize",
        ],
      },
      pullRequestReview: {
        types: ["submitted"],
      },
      checkSuite: {
        types: ["completed"],
      },
      status: {},
      schedule: [{ cron: "7 13 * * *" }],
    });

    (workflow.concurrency as any) = "${{ github.workflow }}-${{ github.ref }}";

    workflow.addJobs({
      automerge: {
        runsOn: ["ubuntu-latest"],
        steps: [
          {
            name: "automerge",
            uses: "pascalgn/automerge-action@v0.14.2",
            env: {
              GITHUB_TOKEN: "${{ secrets.GH_TOKEN }}",
              MERGE_RETRIES: "20",
              MERGE_RETRY_SLEEP: "60000",
              MERGE_METHOD: "squash",
              UPDATE_METHOD: "rebase",
            },
          },
        ],
        permissions: {},
      },
    });
  }
}
