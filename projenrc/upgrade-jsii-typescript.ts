/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";
import * as semver from "semver";

/**
 * Helper script for upgrading JSII and TypeScript in the right way.
 * This currently isn't automated (the workflow must be manually run)
 * because there is no way to programmatically determine the EOL date
 * of a JSII version range. This can be found at:
 * https://github.com/aws/jsii-compiler/blob/main/README.md#gear-maintenance--support
 */
export class UpgradeJSIIAndTypeScript {
  constructor(project: javascript.NodeProject, typescriptVersion: string) {
    const workflow = project.github?.addWorkflow("upgrade-jsii-typescript");
    if (!workflow) throw new Error("no workflow defined");

    const plainVersion = typescriptVersion.replace("~", "");
    const defaultVersion = semver.inc(plainVersion, "minor");

    workflow.on({
      workflowDispatch: {
        inputs: {
          newVersion: {
            description: `New JSII/TypeScript version (e.g. "${plainVersion}"), without carets or tildes`,
            required: true,
            default: defaultVersion,
            type: "string",
          },
        },
      },
    });

    (workflow.concurrency as any) = {
      group: "${{ github.workflow }}-${{ github.ref }}",
    };

    workflow.addJobs({
      upgrade: {
        name: "Upgrade JSII & TypeScript",
        runsOn: ["ubuntu-latest"],
        steps: [
          {
            name: "Checkout",
            uses: "actions/checkout@v3",
          },
          {
            name: "Setup Node.js",
            uses: "actions/setup-node@v3",
          },
          {
            name: "Install",
            run: "yarn install",
          },
          {
            name: "Run upgrade script",
            run: "scripts/update-jsii-typescript.sh $NEW_VERSION",
          },
          {
            name: "Get values for pull request",
            id: "latest_version",
            run: [
              `NEW_VERSION_SHORT=$(cut -d "." -f 1,2 <<< "$NEW_VERSION")`,
              `echo "value=$NEW_VERSION" >> $GITHUB_OUTPUT`,
              `echo "short=$NEW_VERSION_SHORT" >> $GITHUB_OUTPUT`,
            ].join("\n"),
          },
          {
            name: "Create Pull Request",
            uses: "peter-evans/create-pull-request@v3",
            with: {
              "commit-message":
                "chore: upgrade jsii & typescript to v${{ steps.latest_version.outputs.short }}",
              branch:
                "auto/upgrade-jsii-ts-${{ steps.latest_version.outputs.short }}",
              base: "main",
              title:
                "chore: upgrade jsii & typescript to v${{ steps.latest_version.outputs.short }}",
              body: [
                "This PR increases the version of JSII and TypeScript to `~${{ steps.latest_version.outputs.value }}`, ",
                "presumably because the previous version is close to EOL or no longer supported. Support timeline: ",
                "https://github.com/aws/jsii-compiler/blob/main/README.md#gear-maintenance--support",
              ].join(" "),
              labels: "auto-approve,automerge,automated",
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
          NEW_VERSION: "${{ inputs.new_version }}", // should be newVersion but Projen converts it to snake_case
        },
        permissions: {
          contents: JobPermission.READ,
        },
      },
    });
  }
}
