/* eslint-disable @typescript-eslint/no-require-imports */
import { pascalCase } from "change-case";
import {
  JsiiProject,
  JsiiProjectOptions,
  TypeScriptProject,
} from "projen";
import { AutoMerge } from "./auto-merge";
import { CdktfConfig } from "./cdktf-config";
import { ProviderUpgrade } from "./provider-upgrade";

export interface CdktfAwsCdkOptions extends Partial<JsiiProjectOptions> {
  readonly terraformProvider: string;
  readonly cdktfVersion: string;
  readonly constructsVersion: string;
}

const author = "HashiCorp";
const authorAddress = "https://hashicorp.com";
const namespace = "cdktf";
const githubNamespace = "hashicorp";

export class CdktfAwsCdkProject extends JsiiProject {
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
    const nugetName = `HashiCorp.${pascalCase(namespace)}.AwsCdk`;

    super({
      ...options,
      workflowContainerImage,
      license: "MPL-2.0",
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
      depsUpgradeOptions: {
        workflowOptions: {
          gitIdentity: {
            name: "team-tf-cdk",
            email: "github-team-tf-cdk@hashicorp.com",
          },
        },
      },
    });

    // fix as we use es6 in this class
    this.removeTask(TypeScriptProject.DEFAULT_TASK);
    this.addTask(TypeScriptProject.DEFAULT_TASK, {
      exec: `ts-node --skip-project --compiler-options '{"target":"es6"}' .projenrc.ts`,
    });

    [this.compileTask, this.testTask].forEach((task) =>
      task.env("NODE_OPTIONS", "--max-old-space-size=6144")
    );
    this.testTask.env("DEBUG", "jest");

    const testExamples = this.addTask("examples:test", {
      cwd: "examples/typescript-cron-lambda",
      exec: "yarn test:ci",
    });
    testExamples.exec('yarn test:ci', { cwd: 'examples/typescript-manual-mapping'});
    testExamples.exec('yarn test:ci', { cwd: 'examples/typescript-step-functions'});

    this.buildTask.spawn(testExamples);

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

    new CdktfConfig(this, {
      terraformProvider,
      providerName,
      providerVersion,
      cdktfVersion,
      constructsVersion,
    });
    new ProviderUpgrade(this);
    new AutoMerge(this);
  }
}
