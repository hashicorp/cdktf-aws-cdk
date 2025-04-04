/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Checks for new versions of CDKTF and creates a PR with an upgrade change if there are changes.
 */
export class UpgradeCDKTF {
  constructor(project: javascript.NodeProject) {
    const workflow = project.github?.addWorkflow("upgrade-cdktf");

    if (!workflow) throw new Error("no workflow defined");

    workflow.on({
      schedule: [{ cron: "42 */6 * * *" }], // Runs four times a day
      workflowDispatch: {}, // allow manual triggering
    });

    (workflow.concurrency as any) = {
      group: "${{ github.workflow }}-${{ github.ref }}",
    };

    workflow.addJobs({
      upgrade: {
        name: "Upgrade CDKTF",
        runsOn: ["ubuntu-latest"],
        steps: [
          {
            name: "Checkout",
            uses: "actions/checkout",
          },
          {
            name: "Setup Node.js",
            uses: "actions/setup-node",
            with: {
              "node-version": project.minNodeVersion,
            },
          },
          {
            name: "Install",
            run: "yarn install",
          },
          {
            name: "Get current CDKTF version",
            id: "current_version",
            run: [
              `OLD_VERSION=$(npm list cdktf --depth=0 --json | jq -r '.dependencies.cdktf.version')`,
              `OLD_VERSION_SHORT=$(cut -d "." -f 2 <<< "$OLD_VERSION")`,
              `echo "value=$OLD_VERSION" >> $GITHUB_OUTPUT`,
              `echo "short=$OLD_VERSION_SHORT" >> $GITHUB_OUTPUT`,
            ].join("\n"),
            // NOTE: No, there is no good way to do this in Yarn, until (if) we upgrade to Yarn 2+ (see below)
          },
          {
            name: "Get latest CDKTF version",
            id: "latest_version",
            run: [
              `CDKTF_VERSION=$(yarn info cdktf --json | jq -r '.data.version')`,
              `CDKTF_VERSION_SHORT=$(cut -d "." -f 2 <<< "$CDKTF_VERSION")`,
              `CONSTRUCTS_VERSION=$(yarn info cdktf --json | jq -r '.data.peerDependencies.constructs')`,
              `CONSTRUCTS_VERSION_EXACT=$(cut -d "^" -f 2 <<< "$CONSTRUCTS_VERSION")`, // strip the caret off the beginning
              `echo "value=$CDKTF_VERSION" >> $GITHUB_OUTPUT`,
              `echo "short=$CDKTF_VERSION_SHORT" >> $GITHUB_OUTPUT`,
              `echo "constructs=$CONSTRUCTS_VERSION_EXACT" >> $GITHUB_OUTPUT`,
            ].join("\n"),
            // IMPORTANT: the above behavior changed in Yarn 2+; `yarn info` instead gives the version of the installed package
            // If/when we upgrade we'll likely want to switch to `yarn npm info`: https://yarnpkg.com/cli/npm/info
          },
          {
            name: "Run upgrade script",
            if: "steps.current_version.outputs.short != steps.latest_version.outputs.short",
            run: "scripts/update-cdktf.sh ${{ steps.latest_version.outputs.value }} ${{ steps.latest_version.outputs.constructs }}",
          },
          {
            name: "Create Pull Request",
            if: "steps.current_version.outputs.short != steps.latest_version.outputs.short",
            uses: "peter-evans/create-pull-request",
            with: {
              "commit-message":
                "chore!: upgrade to cdktf ${{ steps.latest_version.outputs.value }}",
              branch:
                "auto/upgrade-cdktf-${{ steps.latest_version.outputs.short }}",
              base: "main",
              title:
                "chore!: upgrade to cdktf ${{ steps.latest_version.outputs.value }}",
              body: "This PR upgrades CDKTF from version `${{ steps.current_version.outputs.value }}` to version `${{ steps.latest_version.outputs.value }}`.",
              labels: "automerge,automated,dependencies",
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
