/* eslint-disable @typescript-eslint/no-require-imports */
import { cdk } from "projen";
import { AutoMerge } from "./auto-merge";
import { CdktfConfig } from "./cdktf-config";
import { CustomizedLicense } from "./customized-license";
import { ProviderUpgrade } from "./provider-upgrade";

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
      depsUpgradeOptions: {
        workflowOptions: {
          gitIdentity: {
            name: "team-tf-cdk",
            email: "github-team-tf-cdk@hashicorp.com",
          },
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
        }
      ],
    });

    [this.compileTask, this.testTask].forEach((task) =>
      task.env("NODE_OPTIONS", "--max-old-space-size=6144")
    );
    this.testTask.env("DEBUG", "jest");

    const testExamples = this.addTask("examples:test", {
      cwd: "examples/typescript-cron-lambda",
      exec: "yarn test:ci",
    });
    testExamples.exec("yarn test:ci", {
      cwd: "examples/typescript-manual-mapping",
    });
    testExamples.exec("yarn test:ci", {
      cwd: "examples/typescript-step-functions",
    });
    testExamples.exec("yarn test:ci", {
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

    new CdktfConfig(this, {
      terraformProvider,
      providerName,
      providerVersion,
      cdktfVersion,
      constructsVersion,
    });
    new ProviderUpgrade(this);
    new AutoMerge(this);
    new CustomizedLicense(this);
  }
}
