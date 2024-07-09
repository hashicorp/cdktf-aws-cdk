/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// import { pascalCase, snakeCase } from "change-case";
import { cdk } from "projen";
import { Stability } from "projen/lib/cdk";
import { JobStep } from "projen/lib/github/workflows-model";
import { NpmAccess, UpgradeDependenciesSchedule } from "projen/lib/javascript";
import { AutoApprove } from "./auto-approve";
import { Automerge } from "./automerge";
import { CdktfConfig } from "./cdktf-config";
import { CustomizedLicense } from "./customized-license";
import { LockIssues } from "./lock-issues";
import { ProviderUpgrade } from "./provider-upgrade";
import { UpgradeCDKTF } from "./upgrade-cdktf";
import { UpgradeNode } from "./upgrade-node";
import { generateRandomCron, Schedule } from "./util/random-cron";

export interface CdktfAwsCdkOptions extends Partial<cdk.JsiiProjectOptions> {
  readonly terraformProvider: string;
  readonly cdktfVersion: string;
  readonly constructsVersion: string;
}

const name = "@cdktf/aws-cdk";
const kebabName = name.replace(/^@cdktf\//, "cdktf-");
// const shortName = name.replace(/^@?cdktf[-\/]/g, "");
const githubNamespace = "hashicorp";
const author = "HashiCorp";
const authorAddress = "https://hashicorp.com";

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

    super({
      ...options,
      workflowContainerImage,
      minNodeVersion,
      name,
      authorAddress,
      author,
      authorOrganization: true,
      repositoryUrl: `https://github.com/${githubNamespace}/${kebabName}.git`,
      description: `Adapter for using AWS CDK constructs in Terraform CDK (cdktf) projects`,
      keywords: ["cdktf", "terraform", "cdk", "aws-cdk", "aws"],
      licensed: false, // we do supply our own license file with a custom header
      releaseToNpm: true,
      defaultReleaseBranch: "main",
      sampleCode: false,
      jest: true,
      jestOptions: {
        jestConfig: {
          setupFilesAfterEnv: ["./setupJest.js"],
          testPathIgnorePatterns: [
            "/node_modules/",
            "<rootDir>/examples",
            ".yalc",
            ".+\\.d\\.ts",
          ],
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
      testdir: "src/tests",
      typescriptVersion: options.jsiiVersion,
      tsconfigDev: {
        compilerOptions: {},
        exclude: ["/node_modules/", "<rootDir>/examples", ".yalc"],
      },
      prettier: true,
      eslintOptions: {
        dirs: ["src"],
        devdirs: ["src/tests", "scripts"],
        ignorePatterns: [
          "src/aws/**",
          "src/awscc/**",
          "src/time/**",
          "**/node_modules/**",
          "**/dist/**",
          "*.d.ts",
        ],
      },
      mergify: false,
      docgen: false, // custom docgen setup is defined in cdktf-config.ts
      pullRequestTemplate: false,
      peerDependencyOptions: {
        pinnedDevDependency: false,
      },
      depsUpgradeOptions: {
        workflowOptions: {
          labels: ["automerge", "auto-approve", "dependencies"],
          schedule: UpgradeDependenciesSchedule.WEEKLY,
        },
      },
      workflowGitIdentity: {
        name: "team-tf-cdk",
        email: "github-team-tf-cdk@hashicorp.com",
      },
      stale: false, // disabling for now but keeping the options below so we can turn it back on if desired
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
      npmAccess: NpmAccess.PUBLIC,
      stability: Stability.EXPERIMENTAL, // change this to STABLE when we go GA
      // Uncomment the following when we're ready to start publishing to other package managers
      // publishToPypi: {
      //   distName: kebabName,
      //   module: snakeCase(kebabName),
      // },
      // publishToNuget: {
      //   dotNetNamespace: `HashiCorp.Cdktf.${pascalCase(shortName)}`,
      //   packageId: `HashiCorp.Cdktf.${pascalCase(shortName)}`,
      // },
      // publishToMaven: {
      //   javaPackage: `com.hashicorp.cdktf.${snakeCase(shortName)}`,
      //   mavenGroupId: "com.hashicorp",
      //   mavenArtifactId: kebabName,
      //   mavenEndpoint: "https://hashicorp.oss.sonatype.org",
      // },
      // publishToGo: {
      //   gitUserEmail: "github-team-tf-cdk@hashicorp.com",
      //   gitUserName: "CDK for Terraform Team",
      //   moduleName: `github.com/${githubNamespace}/${kebabName}-go`,
      //   packageName: kebabName.replace(/-/g, ""),
      // },
    });

    this.eslint?.addOverride({
      files: ["src/**"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    });

    this.addPackageIgnore("docs"); // don't package the docs because they are huge
    this.addPackageIgnore("examples");
    this.addPackageIgnore("/.projenrc.ts");
    this.addPackageIgnore("projenrc");

    new CdktfConfig(this, {
      terraformProvider,
      providerName,
      providerVersion,
      cdktfVersion,
      constructsVersion,
    });
    new Automerge(this);
    new AutoApprove(this);
    new CustomizedLicense(this);
    new LockIssues(this);
    new ProviderUpgrade(this);
    new UpgradeCDKTF(this);
    new UpgradeNode(this);

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

    this.buildWorkflow?.addPostBuildSteps(
      {
        name: "Setup Copywrite tool",
        uses: "hashicorp/setup-copywrite@32638da2d4e81d56a0764aa1547882fc4d209636", // v1.1.3
      },
      { name: "Add headers using Copywrite tool", run: "copywrite headers" },
    );
    this.addPackageIgnore(".copywrite.hcl");

    const staleWorkflow = this.tryFindObjectFile(".github/workflows/stale.yml");
    staleWorkflow?.addOverride("on.schedule", [
      {
        cron: generateRandomCron({ project: this, maxHour: 4, hourOffset: 1 }),
      },
    ]);

    const upgradeWorkflow = this.tryFindObjectFile(
      ".github/workflows/upgrade-main.yml",
    );
    upgradeWorkflow?.addOverride("on.schedule", [
      {
        cron: generateRandomCron({
          project: this,
          maxHour: 2,
          schedule: Schedule.Weekly,
        }),
      },
    ]);

    const releaseWorkflow = this.tryFindObjectFile(
      ".github/workflows/release.yml",
    );
    releaseWorkflow?.addOverride("on.push", {
      branches: ["main"],
      "paths-ignore": [
        // don't do a release if the change was only to these files/directories
        "examples/**",
        ".github/ISSUE_TEMPLATE/**",
        ".github/CODEOWNERS",
        ".github/dependabot.yml",
        ".github/**/*.md",
      ],
    });

    const buildWorkflow = this.tryFindObjectFile(".github/workflows/build.yml");
    buildWorkflow?.addOverride("jobs.build.permissions", {
      contents: "write",
      actions: "write",
      "pull-requests": "write",
    });
    buildWorkflow?.addToArray(
      "jobs.build.steps",
      {
        name: "Check if anything was actually changed by this PR",
        id: "check_files",
        env: {
          GH_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
          PR_ID: "${{ github.event.pull_request.number }}",
        },
        run: "gh pr diff $PR_ID | grep . || echo 'no_changes=true' >> $GITHUB_OUTPUT",
      } as JobStep,
      {
        name: "Close the PR if empty",
        env: {
          GH_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
          PR_ID: "${{ github.event.pull_request.number }}",
        },
        if: "steps.check_files.outputs.no_changes",
        run: "git fetch origin main\ngh pr close $PR_ID --delete-branch",
        // the GH CLI will attempt to switch back to 'main' after the pr close, which hasn't been fetched
      } as JobStep,
      {
        name: "Cancel the rest of the run if empty",
        env: {
          GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}",
          RUN_ID: "${{ github.run_id }}",
        },
        if: "steps.check_files.outputs.no_changes",
        run: "gh run cancel $RUN_ID \ngh run watch $RUN_ID",
      } as JobStep,
    );
  }
}
