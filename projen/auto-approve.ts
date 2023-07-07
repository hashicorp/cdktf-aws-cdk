/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";

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
        ],
      },
    });

    workflow.addJobs({
      automerge: {
        runsOn: ["ubuntu-latest"],
        steps: [
          {
            name: "approve",
            if: "contains(github.event.pull_request.labels.*.name, 'auto-approve')",
            run: "gh pr review ${{ github.event.pull_request.number }} --approve",
            env: {
              GITHUB_TOKEN: "${{ secrets.GH_TOKEN }}",
            },
          },
        ],
        permissions: {},
      },
    });
  }
}
