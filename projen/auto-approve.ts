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
      pullRequestTarget: {
        types: [
          "opened",
          "labeled",
          "ready_for_review",
          "reopened",
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
            },
          },
          {
            name: "Auto-approve PRs by team-tf-cdk as github-actions[bot]",
            if: "contains(github.event.pull_request.labels.*.name, 'auto-approve') && (github.event.pull_request.user.login == 'team-tf-cdk')",
            run: "gh pr review ${{ github.event.pull_request.number }} --approve",
            env: {
              GH_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
            },
          },
          {
            name: "Auto-approve PRs by other users as team-tf-cdk",
            if: "contains(github.event.pull_request.labels.*.name, 'auto-approve') && (github.event.pull_request.user.login != 'team-tf-cdk')",
            run: "gh pr review ${{ github.event.pull_request.number }} --approve",
            env: {
              GH_TOKEN: "${{ secrets.GH_TOKEN }}",
            },
          },
        ],
        permissions: {
          contents: JobPermission.READ,
          pullRequests: JobPermission.WRITE,
        },
      },
    });
  }
}
