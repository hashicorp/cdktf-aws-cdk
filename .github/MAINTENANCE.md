# Maintenance Guide

This document is intended for maintainers of this repository and outlines how to perform various maintenance-related activities, including descriptions of what processes are currently automated and which are not (yet).

This repository contains extensive GitHub Actions [workflows](https://github.com/hashicorp/cdktf-aws-cdk/tree/main/.github/workflows) that automate as much of the project's lifecycle as possible. The project is built using [Projen](https://projen.io/) and as such **these workflows should not be edited directly**. Their sources can be found in the [`.projenrc/`](https://github.com/hashicorp/cdktf-aws-cdk/tree/main/projenrc) directory, and new workflows are added to the project in [`projenrc/index.ts`](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/projenrc/index.ts).

This project is considered experimental, and does not offer any support or maintenance guarantees.


## Security & Dependency Management

Dependency upgrades (for security purposes as well as a best practice) can be divided into three categories: fully-automated, semi-automated, and not automated.

### Fully Automated

The following Actions exist to automate various dependency upgrades:

- [upgrade-cdktf](https://github.com/hashicorp/cdktf-aws-cdk/actions/workflows/upgrade-cdktf.yml): This is a custom workflow (source [here](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/projenrc/upgrade-cdktf.ts)) that runs four times a day and checks whether there is a new minor version of CDKTF itself (e.g. `0.19`, `0.20`, `0.21`, etc.), using the latest version published to npm as the source of truth. If a new version is found, it runs [this](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/scripts/update-cdktf.sh) script to update the CDKTF version in all the right places, as well as upgrading the minimum required (peer dependency) version of the `constructs` library, for which the source of truth is the peer dependency version of `constructs` required by the `cdktf` package. The PR that gets generated currently requires a human engineer to approve it as a sanity-check, but aside from that the process is fully automated.
- [upgrade-main](https://github.com/hashicorp/cdktf-aws-cdk/actions/workflows/upgrade-main.yml): This is a Projen built-in/default workflow that handles automated dependency updates. It currently runs on a weekly basis, which can be configured [here](https://github.com/hashicorp/cdktf-aws-cdk/blob/31f9be8c91984be2193db05dc4599b0d5e223fce/projenrc/index.ts#L114). Projen will upgrade itself as part of this process. This process is 100% automated; as long as the build succeeds and any tests pass, the PR that is generated will be automatically merged without any human intervention.
- [upgrade-node](https://github.com/hashicorp/cdktf-aws-cdk/actions/workflows/upgrade-node.yml): This is a custom workflow (source [here](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/projenrc/upgrade-node.ts)) that runs once a day to check if the current minimum version of Node.js supported by this project is less than 30 days away from EOL; this check is done by [this](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/scripts/check-node-versions.js) script using [this](https://nodejs.org/download/release/index.json) file as the source of truth. If the script determines that the current version is less than 30 days away from EOL, it runs [this](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/scripts/update-node.sh) script to upgrade the project to the next even-numbered (i.e. LTS-eligible) version of Node.js. The PR that gets generated currently requires a human engineer to approve it (in case we want to control the timing of when these upgrades roll out across all of our projects), but aside from that the process is fully automated.
  - This workflow can also be manually triggered, optionally taking a hard-coded Node.js version as input in case we ever want to upgrade to a newer version without waiting until the old one is less than 30 days away from EOL.

Dependabot is also [configured](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/.github/dependabot.yml) to check for new security updates daily and, if found, make changes to the lockfile only. This is because Dependabot can sometimes address security issues in dependencies more quickly than Projen due to its atomic nature. While you could tweak the Dependabot settings, note that Projen and Dependabot do not generally play nicely together; in particular, Dependabot cannot make changes to `package.json` because Projen would just override these changes (hence the reason why Dependabot is currently limited to lockfile-only). If you wanted to fully automate dependency management using Dependabot, you would want to disable Projen's [automatic updates](https://projen.io/docs/api/typescript#projen.typescript.TypeScriptProjectOptions.property.depsUpgrade).

### Semi-Automated

The following Actions either need to be manually triggered or require significant manual effort as part of the upgrade process:

- [upgrade-jsii-typescript](https://github.com/hashicorp/cdktf-aws-cdk/actions/workflows/upgrade-jsii-typescript.yml): This is a custom workflow (source [here](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/projenrc/upgrade-jsii-typescript.ts)) that must be manually triggered because there currently is no programmatic way to determine when a JSII version is no longer supported. This means that somebody should be monitoring the [JSII support timeline](https://github.com/aws/jsii-compiler/blob/main/README.md#gear-maintenance--support) to determine when it's time to upgrade. The script takes as input the desired new version, and all the steps afterwards are fully automated. The code for the upgrade itself lives in [this](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/scripts/update-jsii-typescript.sh) script.

### Not Automated

- **GitHub Actions version pinning**: Because this project leverages Projen, HashiCorp Security's [tsccr-helper](https://github.com/hashicorp/security-tsccr?tab=readme-ov-file#tsccr-helper-cli) CLI and other tooling cannot be used to manage/upgrade GitHub Actions versions. Instead, we have consolidated all of the versions into a single [object](https://github.com/hashicorp/cdktf-aws-cdk/blob/31f9be8c91984be2193db05dc4599b0d5e223fce/.projenrc.ts#L8-L20) in code that must be manually updated. Historically, one of the maintainers has followed these manual steps on a roughly monthly basis:
  1. Look up the latest supported versions [here](https://github.com/hashicorp/security-tsccr/tree/main/components/github_actions)
  2. Update the [object](https://github.com/hashicorp/cdktf-aws-cdk/blob/31f9be8c91984be2193db05dc4599b0d5e223fce/.projenrc.ts#L8-L20)
  3. Run `npx projen`
  4. Create a new PR with the title `chore(deps): update pinned versions of GitHub Actions`
- **`aws-cdk-lib` library upgrades**: Because `aws-cdk-lib` is a peer dependency, the `upgrade-main` script described above will _never_ increment its version; this will always need to be done manually by [editing](https://github.com/hashicorp/cdktf-aws-cdk/blob/31f9be8c91984be2193db05dc4599b0d5e223fce/projenrc/cdktf-config.ts#L25) `projenrc/cdktf-config.ts`. This could _in theory_ be (semi)automated like some of our other upgrade workflows described above for things like CDKTF, Node, and JSII, but in practice we currently have no logic or criteria that governs when `aws-cdk-lib` should be updated; as such, creating a custom workflow for it felt like more effort than it's really worth.

### Disabled

- [provider-upgrade](https://github.com/hashicorp/cdktf-aws-cdk/actions/workflows/provider-upgrade.yml): This is a custom workflow (source [here](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/projenrc/provider-upgrade.ts)) that has been manually disabled through the GitHub Actions UI because all it was creating at this point were empty PRs. The original purpose of this workflow was to update the versions of the providers that are [embedded](https://github.com/hashicorp/cdktf-aws-cdk/blob/31f9be8c91984be2193db05dc4599b0d5e223fce/cdktf.json#L5-L6) in the codebase. A likely better long-term solution is to replace this embedded code; for the embedded AWS provider in particular, a question was raised whether (A) AWS CloudControl has matured enough that everything could be done through that, or (B) it might be better to require [`@cdktf/provider-aws`](https://www.npmjs.com/package/@cdktf/provider-aws) as a peer dependency, since there are already processes in place to keep that up-to-date and performant. However, just in case it provides value in the future, we've kept the code of the workflow around and just disabled it.


## Non-Dependency Maintenance

One other form of maintenance required by this project is to periodically update the list of resources supported by the AWS CloudControl API, which are stored inside the codebase [here](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/src/awscc/supportedTypes.ts). This is essentially a machine-readable version of [this list](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/supported-resources.html).

There is a script to update these types [here](https://github.com/hashicorp/cdktf-aws-cdk/blob/main/scripts/update-supported-types.js) which can be triggered by running `yarn fetch:types`. _(@TODO: Add more detailed instructions for how to run it / how to generate the right type of token needed for this script.)_ Note that the reason why we don't have an automated workflow powering this is because company policy only allows us to generate short-lived AWS access tokens, which has unfortunately necessitated this remaining a manual process that we all-too-often forget to do. (A really clever person could probably come up with a solution to this problem, though!)


## Releasing

Releases are fully automated by Projen and require no manual intervention whatsoever. In general, this repository is configured to publish a new release for each pull request that gets merged (with a few [exceptions](https://github.com/hashicorp/cdktf-aws-cdk/blob/31f9be8c91984be2193db05dc4599b0d5e223fce/projenrc/index.ts#L288-L295)). The only way to force it to create one release that combines multiple merged PRs is to ensure that all of these PRs get merged into `main` at exactly the same time. The new version number is automatically calculated by Projen using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [Semantic Versioning](https://semver.org/).

If you wanted to change the logic that governs when releases are triggered (such as running them on a schedule, or only for certain types of commits), see Projen's [documentation](https://projen.io/docs/publishing/releases-and-versioning) on this subject.

### Package Managers

This library is currently published to these package managers:

- **npm**: The package is called [@cdktf/aws-cdk](https://www.npmjs.com/package/@cdktf/aws-cdk), and publishing is done using an access token associated with the shared [cdktf-team](https://www.npmjs.com/~cdktf-team) account. Credentials to access this account can be found in the CDK for Terraform Team 1Password Vault.
