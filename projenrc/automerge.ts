/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Merges PRs with the "automerge" label
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

    (workflow.concurrency as any) = "${{ github.workflow }}-${{ github.ref }}";

    const maintainerStatuses = `fromJSON('["OWNER", "MEMBER", "COLLABORATOR"]')`;
    workflow.addJobs({
      automerge: {
        runsOn: ["ubuntu-latest"],
        if: "contains(github.event.pull_request.labels.*.name, 'automerge') && github.event.pull_request.draft == false",
        steps: [
          {
            name: "Checkout",
            uses: "actions/checkout@v3",
          },
          {
            name: "Turn on automerge for this PR by a trusted user or bot",
            if: `github.event.pull_request.user.login == 'team-tf-cdk' || contains(${maintainerStatuses}, github.event.pull_request.author_association) || github.actor == 'dependabot[bot]'`,
            run: "gh pr merge --auto --squash ${{ github.event.pull_request.number }}",
            env: {
              GH_TOKEN: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
            },
          },
        ],
        permissions: {
          contents: JobPermission.READ,
        },
      },
    });
  }
}
