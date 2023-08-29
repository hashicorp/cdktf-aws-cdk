/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Allows Dependabot to update the snapshots in the example tests
 * This is sometimes necessary to allow dependency updates to succeed
 */
export class UpdateSnapshots {
  constructor(project: javascript.NodeProject) {
    const workflow = project.github?.addWorkflow("update-snapshots");

    if (!workflow) throw new Error("no workflow defined");

    workflow.on({
      pullRequestTarget: {
        types: ["opened", "reopened", "synchronize"],
      },
      workflowDispatch: {}, // allow manual triggering
    });

    (workflow.concurrency as any) = "${{ github.workflow }}-${{ github.ref }}";

    workflow.addJobs({
      update: {
        name: "Update Snapshots",
        runsOn: ["ubuntu-latest"],
        steps: [
          {
            name: "Checkout",
            uses: "actions/checkout@v3",
            with: {
              ref: "${{ github.event.pull_request.head.ref }}",
              repository:
                "${{ github.event.pull_request.head.repo.full_name }}",
            },
          },
          {
            name: "Run snapshot update in each example directory",
            run: `ls -d examples/* | xargs -I {} bash -c "cd '{}' && yarn && yarn test -- --passWithNoTests --updateSnapshot"`,
            continueOnError: true,
          },
          {
            name: "Check if there are any changes",
            id: "get_changes",
            run: `echo "changed=$(git status --porcelain | wc -l)" >> $GITHUB_OUTPUT`,
          },
          {
            name: "Push changes to branch",
            if: "steps.get_changes.outputs.changed != 0",
            run: [
              "git add .",
              `git commit -s -m "chore: update snapshots in examples"`,
              "git push origin HEAD:$HEAD_REF",
            ].join("\n"),
          },
        ],
        env: {
          CI: "true",
          CHECKPOINT_DISABLE: "1",
          HEAD_REF: "${{ github.event.pull_request.head.ref }}",
        },
        permissions: {
          contents: JobPermission.WRITE,
        },
      },
    });
  }
}
