# [technical preview] AWS Adapter

> **The AWS Adapter is a technical preview and not ready for production usage.** Its API is not stable and things might break unexpectedly.

The `AwsTerraformAdapter` (included in the `@cdktf/aws-cdk` package) allows you to use Amazon Web Services Cloud Development Kit (AWS CDK) constructs in your CDK for Terraform (CDKTF) projects.

The `AwsTerraformAdapter` uses the [`aws_cloudcontrolapi_resource`](https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html) Terraform resource to communicate with the [AWS Cloud Control API](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html). Reference this [list of supported resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/supported-resources.html) for the Cloud Control API.

You need to manually map resources that the AWS Cloud Control API does not yet support to specific Terraform resources because attribute names and resource types differ between CloudFormation and Terraform. Some manual mappings are already [included](https://github.com/hashicorp/cdktf-aws-cdk/tree/main/src/mapping/aws) in the adapter. Manual mappings will become obsolete over time as AWS Cloud Control API expands its coverage. In the meantime, we are happy to accept PRs adding manual mappings for currently unsupported resources!

## Requirements

The `AwsTerraformAdapter` currenly only supports TypeScript projects:

- `aws-cdk-lib` >= 2.0.0 (requires `constructs` version 10)
- `cdktf` >= 0.8.0-pre.2 (pre-release version for 0.8)
- `@cdktf/aws-cdk` >= 0.2 (contains the adapter)


```
npm install @cdktf/aws-cdk
```

## Docs
Read the [docs on Terraform.io](https://www.terraform.io/docs/cdktf/create-and-deploy/aws-adapter.html).

Find auto-generated API docs for this package here: [./API.md](./API.md)
