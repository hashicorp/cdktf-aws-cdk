/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { javascript } from "projen";
import { JobPermission } from "projen/lib/github/workflows-model";
import { generateRandomCron } from "./util/random-cron";

/**
 * Automatically locks issues and PRs after 30 days.
 */
export class LockIssues {
  constructor(project: javascript.NodeProject) {
    const workflow = project.github?.addWorkflow("lock");

    if (!workflow) throw new Error("no workflow defined");

    workflow.on({
      // run daily sometime between midnight and 6am UTC
      schedule: [{ cron: generateRandomCron({ project, maxHour: 6 }) }],
    });

    workflow.addJob("lock", {
      runsOn: ["ubuntu-latest"],
      permissions: {
        pullRequests: JobPermission.WRITE,
        issues: JobPermission.WRITE,
      },
      steps: [
        {
          uses: "dessant/lock-threads@v4.0.0",
          with: {
            "issue-comment":
              `I'm going to lock this issue because it has been closed for at least 30 days.
              This helps our maintainers find and focus on the active issues.
              If you've found a problem that seems similar to this, please 
              [open a new issue](https://github.com/hashicorp/cdktf-aws-cdk/issues/new) 
              so we can investigate further.`.replace(/\s+/g, " "),
            "issue-inactive-days": 30,
            "pr-comment":
              `I'm going to lock this pull request because it has been closed for at least 30 days.
              This helps our maintainers find and focus on the active issues.
              If you've found a problem that seems related to this change, please 
              [open a new issue](https://github.com/hashicorp/cdktf-aws-cdk/issues/new) 
              so we can investigate further.`.replace(/\s+/g, " "),
            "pr-inactive-days": 30,
          },
        },
      ],
    });
  }
}
