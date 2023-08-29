/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { JsonFile, cdk } from "projen";

const CDKTF_JSON_FILE = "cdktf.json";

interface CdktfConfigOptions {
  terraformProvider: string;
  providerName: string;
  providerVersion: string;
  cdktfVersion: string;
  constructsVersion: string;
}

export class CdktfConfig {
  constructor(project: cdk.JsiiProject, options: CdktfConfigOptions) {
    const { terraformProvider, providerName } = options;

    const cdktfVersion = options.cdktfVersion;
    const constructsVersion = options.constructsVersion;

    project.addPeerDeps(`cdktf@^${cdktfVersion}`);
    project.addPeerDeps(`constructs@${constructsVersion}`);
    project.addPeerDeps(`aws-cdk-lib@^2.80.0`);

    project.addDevDeps(`cdktf@${cdktfVersion}`);
    project.addDevDeps(`cdktf-cli@${cdktfVersion}`);
    project.addDevDeps(`constructs@${constructsVersion}`);
    project.addDevDeps(`aws-cdk-lib@2.80.0`);

    project.addBundledDeps(`change-case@^4.1.1`);
    project.addBundledDeps(`codemaker@^1.34.0`);
    project.addBundledDeps(`debug@^4.3.2`);

    project.addDevDeps("@types/debug@^4.1.7");
    project.addDevDeps("@types/jest@^27.0.2");

    // for update-supported-types script
    project.addDevDeps("@aws-sdk/client-cloudformation@^3.36.0");
    project.setScript(
      "fetch:types",
      `mkdir -p src/awscc && rm -rf ./src/awscc/* && node ./scripts/update-supported-types.js`,
    );
    project.addPackageIgnore("scripts");

    project.setScript(
      "fetch",
      `mkdir -p src/aws && rm -rf ./src/aws/* && cdktf get && cp -R .gen/providers/${providerName}/* ./src/aws/` +
        ` && mkdir -p src/time && rm -rf ./src/time/* && cp -R .gen/providers/time/* ./src/time/`,
    );
    project.setScript(
      "commit",
      'git add -A && git commit -am "Update provider" || echo "No changes to commit"',
    );
    // eslint-disable-next-line quotes
    project.setScript(
      "should-release",
      `! git diff --exit-code v$(cat version.json | jq -r '.version') ./src ./package.json`,
    );
    project.setScript(
      "prebump",
      "yarn fetch && yarn compile && yarn run commit && yarn run should-release",
    );
    project.setScript(
      "compile",
      'NODE_OPTIONS="--max-old-space-size=7516" jsii --silence-warnings=reserved-word',
    );

    project.setScript(
      "build-provider",
      "yarn fetch && yarn compile && yarn docgen",
    );
    project.setScript("test", "jest");

    if (project.npmignore) {
      project.npmignore.exclude(CDKTF_JSON_FILE);
      project.npmignore.exclude(".gen");
      project.npmignore.exclude(".terraform");
      project.npmignore.exclude("cdktf.json");
    }
    project.gitignore.exclude(".gen");
    project.gitignore.exclude(".terraform");

    project.addGitIgnore("src/**/*.js");
    project.addGitIgnore("src/**/*.d.ts");
    project.addGitIgnore("**/*.js.map");
    project.addGitIgnore("package-lock.json");
    // for local developing (e.g. linking local changes to cdktf)
    project.addGitIgnore(".yalc");
    project.addGitIgnore("yalc.lock");

    new JsonFile(project, CDKTF_JSON_FILE, {
      obj: {
        language: "typescript",
        app: "echo noop",
        terraformProviders: [terraformProvider, "time@~> 0.7.2"],
      },
    });

    // Submodule documentation generation
    project.gitignore.exclude("API.md"); // ignore the old file, we now generate it in the docs folder
    project.addDevDeps("jsii-docgen");
    const docgen = project.addTask("docgen", {
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
    project.postCompileTask.spawn(docgen);
    project.gitignore.include("/docs/*.md");
    project.annotateGenerated("/docs/*.md");

    [project.compileTask, project.testTask].forEach((task) =>
      task.env("NODE_OPTIONS", "--max-old-space-size=6144"),
    );
    project.testTask.env("DEBUG", "jest");

    const testExamples = project.addTask("examples:test", {
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

    const updateExampleTests = project.addTask("examples:test:update", {
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
  }
}
