/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Approves PRs with the "auto-approve" label
 */
export class AutoApprove {
  constructor(project: javascript.NodeProject) {
    const workflow = project.github?.addWorkflow("auto-approve");

    if (!workflow) throw new Error("no workflow defined");

    workflow.on({
      pullRequest: {
        types: [
          "opened",
          "labeled",
          "ready_for_review",
          "reopened",
          "synchronize",
        ],
      },
    });

    workflow.addJobs({
      approve: {
        runsOn: ["ubuntu-latest"],
        steps: [
          {
            name: "Checkout PR",
            uses: "actions/checkout@v3",
            with: {
              ref: "${{ github.event.pull_request.head.ref }}",
              repository: "${{ github.event.pull_request.head.repo.full_name }}",
            }
          },
          {
            name: "Auto-approve PR",
            if: "contains(github.event.pull_request.labels.*.name, 'auto-approve')",
            run: "gh pr review ${{ github.event.pull_request.number }} --approve",
          },
        ],
        permissions: {
          contents: JobPermission.READ,
        },
        env: {
          GH_TOKEN: "${{ secrets.GH_TOKEN }}",
        },
      },
    });
  }
}
