/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";

/**
 * Auto-updates Node to the next LTS version a month before the previous one goes EOL
 * Can also be triggered manually with a hard-coded version of Node.js as input
 */
export class UpgradeNode {
  constructor(project: javascript.NodeProject) {
    const workflow = project.github?.addWorkflow("upgrade-node");

    if (!workflow) throw new Error("no workflow defined");

    workflow.on({
      schedule: [{ cron: "28 5 * * *" }], // Runs once a day
      workflowDispatch: {
        inputs: {
          version: {
            description:
              "Node.js version to upgrade to, in the format: 12.34.56",
            required: false,
            type: "string",
          },
        },
      },
    });

    (workflow.concurrency as any) = {
      group: "${{ github.workflow }}-${{ github.ref }}",
    };

    workflow.addJobs({
      version: {
        name: "Determine version to upgrade to",
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
            name: "Get current Node.js version",
            id: "current_version",
            run: [
              `ENGINES_NODE_VERSION=$(npm pkg get engines.node | tr -d '"')`,
              `CURRENT_VERSION=$(cut -d " " -f 2 <<< "$ENGINES_NODE_VERSION")`,
              `CURRENT_VERSION_MAJOR=$(cut -d "." -f 1 <<< "$CURRENT_VERSION")`,
              `CURRENT_VERSION_MINOR=$(cut -d "." -f 2 <<< "$CURRENT_VERSION")`,
              `echo "CURRENT_NODEJS_VERSION=$CURRENT_VERSION" >> $GITHUB_ENV`,
              `echo "CURRENT_NODEJS_VERSION_MAJOR=$CURRENT_VERSION_MAJOR" >> $GITHUB_ENV`,
              `echo "CURRENT_NODEJS_VERSION_MINOR=$CURRENT_VERSION_MINOR" >> $GITHUB_ENV`,
              `echo "value=$CURRENT_VERSION" >> $GITHUB_OUTPUT`,
            ].join("\n"),
          },
          {
            name: "Get the earliest supported Node.js version whose EOL date is at least a month away",
            if: "${{ ! inputs.version }}",
            uses: "actions/github-script@v6",
            with: {
              script: [
                `const script = require('./scripts/check-node-versions.js')`,
                `await script({github, context, core})`,
              ].join("\n"),
            },
          },
          {
            // In an ideal world this is where we'd validate that the manually-input version actually exists
            // In practice, I couldn't figure out how to do this properly and it wasn't worth the effort
            name: "Save the manually-input version to environment variables for comparison",
            if: "${{ inputs.version }}",
            env: {
              NEW_VERSION: "${{ inputs.version }}",
            },
            run: [
              `NEW_VERSION_MAJOR=$(cut -d "." -f 1 <<< "$NEW_VERSION")`,
              `NEW_VERSION_MINOR=$(cut -d "." -f 2 <<< "$NEW_VERSION")`,
              `echo "NEW_NODEJS_VERSION=$NEW_VERSION" >> $GITHUB_ENV`,
              `echo "NEW_NODEJS_VERSION_MAJOR=$NEW_VERSION_MAJOR" >> $GITHUB_ENV`,
              `echo "NEW_NODEJS_VERSION_MINOR=$NEW_VERSION_MINOR" >> $GITHUB_ENV`,
            ].join("\n"),
          },
          {
            name: "Output env variables for use in the next job",
            id: "latest_version",
            run: [
              `echo "value=$NEW_NODEJS_VERSION" >> $GITHUB_OUTPUT`,
              `echo "major=$NEW_NODEJS_VERSION_MAJOR" >> $GITHUB_OUTPUT`,
              `[[ "$NEW_NODEJS_VERSION_MAJOR" > "$CURRENT_NODEJS_VERSION_MAJOR" || ("$NEW_NODEJS_VERSION_MAJOR" == "$CURRENT_NODEJS_VERSION_MAJOR" && "$NEW_NODEJS_VERSION_MINOR" > "$CURRENT_NODEJS_VERSION_MINOR") ]] && IS_NEWER=true`,
              `echo "is_newer=$IS_NEWER" >> $GITHUB_OUTPUT`,
            ].join("\n"),
          },
        ],
        outputs: {
          current: {
            stepId: "current_version",
            outputName: "value",
          },
          latest: {
            stepId: "latest_version",
            outputName: "value",
          },
          major: {
            stepId: "latest_version",
            outputName: "major",
          },
          should_upgrade: {
            stepId: "latest_version",
            outputName: "is_newer",
          },
        },
        permissions: {
          contents: JobPermission.READ,
        },
      },
      upgrade: {
        name: "Upgrade Node.js",
        runsOn: ["ubuntu-latest"],
        needs: ["version"],
        if: "always() && needs.version.outputs.should_upgrade",
        steps: [
          {
            name: "Checkout",
            uses: "actions/checkout",
          },
          {
            name: "Setup Node.js",
            uses: "actions/setup-node",
            with: {
              "node-version": "${{ needs.version.outputs.latest }}",
            },
          },
          {
            name: "Setup Terraform",
            uses: "hashicorp/setup-terraform",
            with: {
              terraform_wrapper: false,
            },
          },
          {
            name: "Install",
            run: "yarn install",
          },
          {
            name: "Run upgrade script",
            run: "scripts/update-node.sh ${{ needs.version.outputs.latest }}",
          },
          {
            name: "Regenerate bindings",
            run: "yarn run fetch && yarn run compile",
          },
          {
            name: "Update auto-generated docs",
            run: "yarn run docgen",
          },
          {
            name: "Create Pull Request",
            uses: "peter-evans/create-pull-request",
            with: {
              base: "main",
              branch: "auto/upgrade-node-${{ needs.version.outputs.major }}",
              "commit-message":
                "chore!: increase minimum supported Node.js version to ${{ needs.version.outputs.major }}",
              title:
                "chore!: increase minimum supported Node.js version to ${{ needs.version.outputs.major }}",
              body: [
                "This PR increases the minimum supported Node.js version",
                "to `${{ needs.version.outputs.latest }}` from `${{ needs.version.outputs.current }}`",
                "because version ${{ needs.version.outputs.current }} is less than 30 days away from EOL.",
                "\n\nWhile this PR could be merged as-is, it is recommended that you scan the code (especially `.projenrc.ts`)",
                "to see if there are any comments indicating changes that can/should be made when upgrading Node, such as:",
                "\n```// The following line can be removed when upgrading to Node ${{ needs.version.outputs.major }}```",
              ].join(" "),
              labels: "automerge,automated,security",
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
