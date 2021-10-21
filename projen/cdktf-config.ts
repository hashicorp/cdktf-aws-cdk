import { JsonFile, JsiiProject } from "projen";

const CDKTF_JSON_FILE = "cdktf.json";

interface CdktfConfigOptions {
  terraformProvider: string;
  providerName: string;
  providerVersion: string;
  cdktfVersion: string;
  constructsVersion: string;
}

export class CdktfConfig {
  constructor(project: JsiiProject, options: CdktfConfigOptions) {
    const { terraformProvider, providerName } = options;

    const cdktfVersion = options.cdktfVersion;
    const constructsVersion = options.constructsVersion;

    project.addPeerDeps(`cdktf@^${cdktfVersion}`);
    project.addPeerDeps(`constructs@${constructsVersion}`);
    project.addPeerDeps(`aws-cdk-lib@^2.0.0-rc.17`);

    project.addDevDeps(`cdktf@${cdktfVersion}`);
    project.addDevDeps(`cdktf-cli@${cdktfVersion}`);
    project.addDevDeps(`constructs@${constructsVersion}`);
    project.addDevDeps(`aws-cdk-lib@2.0.0-rc.17`);

    project.addBundledDeps(`change-case@^4.1.1`);
    project.addBundledDeps(`codemaker@^1.34.0`);
    project.addBundledDeps(`debug@^4.3.2`);

    project.addDevDeps("@types/debug@^4.1.7");
    project.addDevDeps("@types/jest@^27.0.2");

    project.setScript(
      "fetch",
      `mkdir -p src/aws && rm -rf ./src/aws/* && cdktf get && cp -R .gen/providers/${providerName}/* ./src/aws/` +
        ` && mkdir -p src/time && rm -rf ./src/time/* && cp -R .gen/providers/time/* ./src/time/`
    );
    project.setScript(
      "commit",
      'git add -A && git commit -am "Update provider" || echo "No changes to commit"'
    );
    // eslint-disable-next-line quotes
    project.setScript(
      "should-release",
      `! git diff --exit-code v$(cat version.json | jq -r '.version') ./src ./package.json`
    );
    project.setScript(
      "prebump",
      "yarn fetch && yarn compile && yarn run commit && yarn run should-release"
    );
    project.setScript("compile", 'NODE_OPTIONS="--max-old-space-size=7516" jsii --silence-warnings=reserved-word');

    project.setScript(
      "build-provider",
      "yarn fetch && yarn compile && yarn docgen"
    );
    project.setScript("test", "jest");
    project.addFields({ publishConfig: { access: "public" } });

    if (project.npmignore) {
      project.npmignore.exclude(CDKTF_JSON_FILE);
      project.npmignore.exclude(".gen");
      project.npmignore.exclude(".terraform");
      project.npmignore.exclude("cdktf.json");
    }
    project.gitignore.exclude(".gen");
    project.gitignore.exclude(".terraform");
    project.gitignore.exclude("package-lock.json");

    new JsonFile(project, CDKTF_JSON_FILE, {
      obj: {
        language: "typescript",
        app: "echo noop",
        terraformProviders: [terraformProvider, "time@~> 0.7.2"],
      },
    });
  }
}
