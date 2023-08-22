/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

/* eslint-disable @typescript-eslint/no-require-imports */
import { cdk } from "projen";
import { JobStep } from "projen/lib/github/workflows-model";
import { UpgradeDependenciesSchedule } from "projen/lib/javascript";
import { AutoApprove } from "./auto-approve";
import { AutoMerge } from "./auto-merge";
import { CdktfConfig } from "./cdktf-config";
import { CustomizedLicense } from "./customized-license";
import { LockIssues } from "./lock-issues";
import { ProviderUpgrade } from "./provider-upgrade";
import { UpgradeCDKTF } from "./upgrade-cdktf";
import { UpgradeNode } from "./upgrade-node";

export interface CdktfAwsCdkOptions extends Partial<cdk.JsiiProjectOptions> {
  readonly terraformProvider: string;
  readonly cdktfVersion: string;
  readonly constructsVersion: string;
}

const author = "HashiCorp";
const authorAddress = "https://hashicorp.com";
const namespace = "cdktf";
const githubNamespace = "hashicorp";

export class CdktfAwsCdkProject extends cdk.JsiiProject {
  constructor(options: CdktfAwsCdkOptions) {
    const {
      terraformProvider,
      workflowContainerImage = "hashicorp/jsii-terraform",
      cdktfVersion,
      constructsVersion,
      minNodeVersion,
    } = options;
    const [fqproviderName, providerVersion] = terraformProvider.split("@");
    const providerName = fqproviderName.split("/").pop();
    if (!providerName) {
      throw new Error(`${terraformProvider} doesn't seem to be valid`);
    }
    // const nugetName = `HashiCorp.${pascalCase(namespace)}.AwsCdk`;

    super({
      ...options,
      workflowContainerImage,
      licensed: false, // we do supply our own license file with a custom header
      releaseToNpm: true,
      minNodeVersion,
      name: `@${namespace}/aws-cdk`,
      description: `Adapter for using AWS CDK constructs in Terraform CDK (cdktf) projects`,
      keywords: ["cdktf", "terraform", "cdk", "aws-cdk", "aws"],
      sampleCode: false,
      jest: true,
      testdir: "src/tests",
      jestOptions: {
        jestConfig: {
          setupFilesAfterEnv: ["./setupJest.js"],
          testPathIgnorePatterns: [
            "/node_modules/",
            "<rootDir>/examples",
            ".yalc",
            ".+\\.d\\.ts",
          ],
          // transform: {
          //   "^.+\\.tsx?$": "ts-jest",
          // },
          coveragePathIgnorePatterns: [
            "/node_modules/",
            "<rootDir>/examples",
            ".yalc",
            ".+\\.d\\.ts",
            // generated provider bindings
            "lib/aws",
            "lib/time",
          ],
        },
      },
      tsconfigDev: {
        compilerOptions: {},
        exclude: ["/node_modules/", "<rootDir>/examples", ".yalc"],
      },
      authorAddress,
      author,
      authorOrganization: true,
      defaultReleaseBranch: "main",
      repositoryUrl: `https://github.com/${githubNamespace}/cdktf-aws-cdk.git`,
      mergify: false,
      eslint: false,
      // python: {
      //   distName: `${namespace}-aws-cdk`,
      //   module: `${namespace}_aws_cdk`,
      // },
      // publishToNuget: {
      //   dotNetNamespace: nugetName,
      //   packageId: nugetName,
      // },
      peerDependencyOptions: {
        pinnedDevDependency: false,
      },
      workflowGitIdentity: {
        name: "team-tf-cdk",
        email: "github-team-tf-cdk@hashicorp.com",
      },
      depsUpgradeOptions: {
        workflowOptions: {
          labels: ["automerge", "dependencies", "auto-approve"],
          schedule: UpgradeDependenciesSchedule.WEEKLY,
        },
      },
      stale: true,
      staleOptions: {
        issues: {
          exemptLabels: ["backlog", "help wanted"],
          staleLabel: "stale",
          daysBeforeStale: 30,
          staleMessage:
            "Hi there! 👋 We haven't heard from you in 30 days and would like to know if the problem has been resolved or if " +
            "you still need help. If we don't hear from you before then, I'll auto-close this issue in 30 days.",
          daysBeforeClose: 30,
          closeMessage:
            "I'm closing this issue because we haven't heard back in 60 days. ⌛️ If you still need help, feel free to reopen the issue!",
        },
        pullRequest: {
          exemptLabels: ["backlog", "help wanted"],
          staleLabel: "stale",
          daysBeforeStale: 60,
          staleMessage:
            "Hi there! 👋 We haven't heard from you in 60 days and would like to know if you're still working on this or need help. " +
            "If we don't hear from you before then, I'll auto-close this PR in 30 days.",
          daysBeforeClose: 30,
          closeMessage:
            "I'm closing this pull request because we haven't heard back in 90 days. ⌛️ If you're still working on this, feel free to reopen the PR or create a new one!",
        },
      },
      postBuildSteps: [
        {
          name: "Prepare Temporary Directory",
          run: "cp -r dist .repo",
        },
        {
          name: "Install Dependencies",
          run: "cd .repo && yarn install --check-files --frozen-lockfile",
        },
        {
          name: "Create js artifact",
          run: "cd .repo && npx projen package:js",
        },
        {
          name: "Run integration tests",
          run: "cd .repo && yarn examples:test",
        },
        {
          name: "Clean up",
          run: "rm -rf .repo",
        },
      ],
      docgen: false,
    });

    // Submodule documentation generation
    this.gitignore.exclude("API.md"); // ignore the old file, we now generate it in the docs folder
    this.addDevDeps("jsii-docgen@~9.0.0");
    this.addDevDeps("jsii-rosetta@~5.1.2");

    const docgen = this.addTask("docgen", {
      description: "Generate documentation for the project",
      steps: [
        {
          exec: [
            "rm -rf docs",
            "rm -f API.md",
            "mkdir docs",
            // @TODO in future when supporting multiple languages, add: -l python -l java -l csharp -l go
            "jsii-docgen --split-by-submodule -l typescript",
            // There is no nice way to tell jsii-docgen to generate docs into a folder so I went this route
            "mv $(ls *.md | grep -v README.md) docs",
            // Some part of the documentation are too long, we need to truncate them to ~10MB
            "cd docs",
            "ls ./ | xargs sed -i '150000,$ d' $1",
          ].join(" && "),
        },
      ],
    });
    this.postCompileTask.spawn(docgen);
    this.gitignore.include("/docs/*.md");
    this.annotateGenerated("/docs/*.md");

    [this.compileTask, this.testTask].forEach((task) =>
      task.env("NODE_OPTIONS", "--max-old-space-size=6144")
    );
    this.testTask.env("DEBUG", "jest");

    const testExamples = this.addTask("examples:test", {
      cwd: "examples/typescript-cron-lambda",
      exec: "npm run test:ci",
    });
    testExamples.exec("npm run test:ci", {
      cwd: "examples/typescript-manual-mapping",
    });
    testExamples.exec("npm run test:ci", {
      cwd: "examples/typescript-step-functions",
    });
    testExamples.exec("npm run test:ci", {
      cwd: "examples/typescript-step-functions-mixed",
    });

    const updateExampleTests = this.addTask("examples:test:update", {
      cwd: "examples/typescript-cron-lambda",
      exec: "npm run test:ci -- -- -u", // requires two level deep passthrough of -u option 😅
    });
    updateExampleTests.exec("npm run test:ci -- -- -u", {
      cwd: "examples/typescript-manual-mapping",
    });
    updateExampleTests.exec("npm run test:ci -- -- -u", {
      cwd: "examples/typescript-step-functions",
    });
    updateExampleTests.exec("npm run test:ci -- -- -u", {
      cwd: "examples/typescript-step-functions-mixed",
    });

    // for local developing (e.g. linking local changes to cdktf)
    this.addGitIgnore(".yalc");
    this.addGitIgnore("yalc.lock");

    this.addGitIgnore("src/**/*.js");
    this.addGitIgnore("src/**/*.d.ts");

    // for update-supported-types script
    this.addDevDeps("@aws-sdk/client-cloudformation@^3.36.0");
    this.setScript(
      "fetch:types",
      `mkdir -p src/awscc && rm -rf ./src/awscc/* && node ./scripts/update-supported-types.js`
    );
    this.addPackageIgnore("scripts");

    this.addPackageIgnore("examples");
    this.addPackageIgnore("/.projenrc.ts");

    const setSafeDirectory = {
      name: "Set git config safe.directory",
      run: "git config --global --add safe.directory $(pwd)",
    };

    const ensureCorrectUser = {
      name: "Ensure correct user",
      run: "chown -R root /__w/cdktf-aws-cdk",
    };

    const buildSteps = (this.buildWorkflow as any).preBuildSteps as JobStep[];
    const releaseSteps = (this.release as any).defaultBranch.workflow.jobs
      .release.steps;
    const { upgrade } = (this.upgradeWorkflow as any).workflows[0].jobs;

    buildSteps.push(setSafeDirectory);
    releaseSteps.splice(1, 0, setSafeDirectory);
    upgrade.steps.splice(1, 0, setSafeDirectory);

    buildSteps.push(ensureCorrectUser);
    releaseSteps.splice(1, 0, ensureCorrectUser);
    upgrade.steps.splice(1, 0, ensureCorrectUser);

    (this.buildWorkflow as any).workflow.events = {
      pullRequestTarget: {},
      workflowDispatch: {},
    };

    this.buildWorkflow?.addPostBuildSteps(
      {
        name: "Setup Copywrite tool",
        uses: "hashicorp/setup-copywrite@867a1a2a064a0626db322392806428f7dc59cb3e", // v1.1.2
      },
      { name: "Add headers using Copywrite tool", run: "copywrite headers" }
    );

    new CdktfConfig(this, {
      terraformProvider,
      providerName,
      providerVersion,
      cdktfVersion,
      constructsVersion,
    });
    new ProviderUpgrade(this);
    new AutoMerge(this);
    new AutoApprove(this);
    new CustomizedLicense(this);
    new LockIssues(this);
    new UpgradeCDKTF(this);
    new UpgradeNode(this);
    this.addDevDeps("node-fetch@~2"); // @TODO this can be removed once we upgrade to Node 18 and use native fetch

    const releaseWorkflow = this.tryFindObjectFile(".github/workflows/release.yml");
    releaseWorkflow?.addOverride("on.push", {
      branches: [
        "main",
      ],
      "paths-ignore": [ // don't do a release if the change was only to the examples
        "examples/**",
      ],
    });

    const buildWorkflow = this.tryFindObjectFile(".github/workflows/build.yml");
    buildWorkflow?.addOverride("jobs.build.permissions", {
      contents: "write",
      actions: "write",
    });
    buildWorkflow?.addToArray("jobs.build.steps", {
      name: "Check if anything was actually changed by this PR",
      id: "check_files",
      env: {
        GH_TOKEN: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
        PR_ID: "${{ github.event.pull_request.number }}",
      },
      run: "gh pr diff $PR_ID | grep . || echo 'no_changes=true' >> $GITHUB_OUTPUT",
    } as JobStep, {
      name: "Close the PR if empty",
      env: {
        GH_TOKEN: "${{ secrets.PROJEN_GITHUB_TOKEN }}",
        PR_ID: "${{ github.event.pull_request.number }}",
      },
      if: "steps.check_files.outputs.no_changes",
      run: "git fetch origin main\ngh pr close $PR_ID --delete-branch",
      // the GH CLI will attempt to switch back to 'main' after the pr close, which hasn't been fetched
    } as JobStep, {
      name: "Cancel the rest of the run if empty",
      env: {
        GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
        RUN_ID: "${{ github.run_id }}",
      },
      if: "steps.check_files.outputs.no_changes",
      run: "gh run cancel $RUN_ID \ngh run watch $RUN_ID",
    } as JobStep);
  }
}
