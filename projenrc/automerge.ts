/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Enables GitHub's built-in automerge for PRs with the "automerge" label
 */
export class Automerge {
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
    });

    (workflow.concurrency as any) = {
      group: "${{ github.workflow }}-${{ github.head_ref }}",
      cancelInProgress: true,
    };

    const maintainerStatuses = `fromJSON('["OWNER", "MEMBER", "COLLABORATOR"]')`;
    workflow.addJobs({
      automerge: {
        runsOn: ["ubuntu-latest"],
        if: "contains(github.event.pull_request.labels.*.name, 'automerge') && !contains(github.event.pull_request.labels.*.name, 'do-not-merge') && github.event.pull_request.draft == false",
        steps: [
          {
            name: "Checkout",
            uses: "actions/checkout",
            with: {
              ref: "${{ env.GIT_REF }}",
              repository: "${{ env.GIT_REPO }}",
            },
          },
          {
            name: "Turn on automerge for this PR by a trusted user or bot",
            if: `github.event.pull_request.user.login == 'team-tf-cdk' || contains(${maintainerStatuses}, github.event.pull_request.author_association) || github.actor == 'dependabot[bot]'`,
            run: "gh pr merge --auto --squash $PR_ID",
            env: {
              GH_TOKEN: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
            },
          },
        ],
        permissions: {
          contents: JobPermission.READ,
        },
        env: {
          GIT_REF: "${{ github.event.pull_request.head.ref }}",
          GIT_REPO: "${{ github.event.pull_request.head.repo.full_name }}",
          PR_ID: "${{ github.event.pull_request.number }}",
        },
      },
    });
  }
}
