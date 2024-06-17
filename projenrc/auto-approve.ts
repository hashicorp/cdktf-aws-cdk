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
        types: ["opened", "labeled", "ready_for_review", "reopened"],
      },
    });

    (workflow.concurrency as any) =
      "${{ github.workflow }}-${{ github.head_ref }}";

    const maintainerStatuses = `fromJSON('["OWNER", "MEMBER", "COLLABORATOR"]')`;
    workflow.addJobs({
      approve: {
        runsOn: ["ubuntu-latest"],
        env: {
          PR_ID: "${{ github.event.pull_request.number }}",
        },
        if: "contains(github.event.pull_request.labels.*.name, 'auto-approve') && github.event.pull_request.draft == false",
        steps: [
          {
            name: "Checkout PR",
            uses: "actions/checkout@v3",
            with: {
              ref: "${{ github.event.pull_request.head.ref }}",
              repository:
                "${{ github.event.pull_request.head.repo.full_name }}",
            },
          },
          {
            name: "Auto-approve PRs by other users as team-tf-cdk",
            if: `github.event.pull_request.user.login != 'team-tf-cdk' && (contains(${maintainerStatuses}, github.event.pull_request.author_association) || github.actor == 'dependabot[bot]')`,
            run: "gh pr review $PR_ID --approve",
            env: {
              GH_TOKEN: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
            },
          },
          {
            name: "Auto-approve PRs by team-tf-cdk as github-actions[bot]",
            if: "github.event.pull_request.user.login == 'team-tf-cdk'",
            run: "gh pr review ${{ github.event.pull_request.number }} --approve",
            env: {
              GH_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
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
