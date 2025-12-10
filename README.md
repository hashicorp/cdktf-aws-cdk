# The Future of Terraform CDK

## Sunset Notice

Terraform CDK (CDKTF) will sunset and be archived on December 10, 2025. HashiCorp, an IBM Company, will no longer maintain or develop the project after that date. Unfortunately, Terraform CDK did not find product-market fit at scale. HashiCorp, an IBM Company, has chosen to focus its investments on Terraform core and its broader ecosystem.

As of December 10, 2025, Terraform CDK will be archived on GitHub, and the documentation will reflect its deprecated status. The archived code will remain available on GitHub, but it will be read-only. No further updates, fixes, or improvements (including compatibility updates) will be made.

You will be able to continue to use Terraform CDK at your own risk. Terraform CDK is licensed under the Mozilla Public License (MPL). HashiCorp, an IBM Company, does not apply any additional restrictions. We encourage community forks if there’s interest in continuing development independently.

## Migration to HCL

You can use the following command to generate Terraform-compatible .tf files directly from your Terraform CDK project:

`cdktf synth --hcl`

This will produce readable HCL configuration files, making it easier to migrate away from Terraform CDK. After running the command, you can use standard Terraform CLI commands (`terraform init`, `terraform plan`, `terraform apply`) to continue managing your infrastructure. Please note that while this helps bootstrap your configuration, you may still need to review and adjust the generated files for clarity, organization, or best practices.

### Note on AWS CDK

If your infrastructure is defined in Terraform CDK but also tightly integrated with AWS CDK, you may find it more consistent to migrate directly to the AWS CDK ecosystem. If you are not using AWS CDK, we highly recommend migrating to standard Terraform and HCL for long-term support and ecosystem alignment.

## FAQ

Q: Is CDKTF still being developed?

A: No. CDKTF will sunset and be archived on December 10, 2025. HashiCorp, an IBM Company, will no longer maintain or develop the project after that date.

Q: Why is CDKTF being sunset?

A: CDKTF did not find product-market fit at scale. We’ve chosen to focus our investments on Terraform core and its broader ecosystem.

Q: Will CDKTF be removed from GitHub?

A: CDKTF will be archived on GitHub, and documentation will reflect its deprecated status.

Q: Can I still use CDKTF after it's sunset?

A: Yes, the archived code will remain available on GitHub, but it will be read-only. No further updates, fixes, or improvements will be made.

Q: Will CDKTF continue to support new versions of Terraform or providers?

A: No. Compatibility updates will not be made after the EOL date.

Q: Can I fork CDKTF and maintain it myself?

A: Yes. CDKTF is open source, and we encourage community forks if there’s interest in continuing development independently.

Q: Can I keep using CDKTF?

A: You may continue to use it at your own risk. HashiCorp, an IBM Company, will no longer be maintaining it.

Q: Is there a migration tool?

A: You can use the following command to generate Terraform-compatible .tf files directly from your CDKTF project:

`cdktf synth --hcl`

This will produce readable HCL configuration files, making it easier to migrate away from CDKTF. After running the command, you can use standard Terraform CLI commands (terraform init, terraform plan, terraform apply) to continue managing your infrastructure. Please note that while this helps bootstrap your configuration, you may still need to review and adjust the generated files for clarity, organization, or best practices.

Q: What migration guidance can we provide to customers?

A: For users looking to migrate away from CDKTF:

If your infrastructure is defined in CDKTF but also tightly integrated with AWS CDK, you may find it more consistent to migrate directly to the AWS CDK ecosystem.

If you are not using AWS CDK, we highly recommend migrating to standard Terraform and HCL for long-term support and ecosystem alignment.

---

# [technical preview] AWS Adapter

> **The AWS Adapter is a technical preview and not ready for production usage.** Its API is not stable and things might break unexpectedly.

The `AwsTerraformAdapter` (included in the `@cdktf/aws-cdk` package) allows you to use Amazon Web Services Cloud Development Kit (AWS CDK) constructs in your CDK for Terraform (CDKTF) projects.

The `AwsTerraformAdapter` uses the [`aws_cloudcontrolapi_resource`](https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html) Terraform resource to communicate with the [AWS Cloud Control API](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html). Reference this [list of supported resources](https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/supported-resources.html) for the Cloud Control API.

You need to manually map resources that the AWS Cloud Control API does not yet support to specific Terraform resources because attribute names and resource types differ between CloudFormation and Terraform. Some manual mappings are already [included](https://github.com/hashicorp/cdktf-aws-cdk/tree/main/src/mapping/aws) in the adapter. Manual mappings will become obsolete over time as AWS Cloud Control API expands its coverage. In the meantime, we are happy to accept PRs adding manual mappings for currently unsupported resources!

## Requirements

The `AwsTerraformAdapter` currently only supports TypeScript projects:

- `node` >= 20.9.0
- `cdktf` >= 0.21.0
- `aws-cdk-lib` >= 2.189.0
- `constructs` >= 10.4.2

```
npm install @cdktf/aws-cdk
```

## Docs
Read the [docs on HashiCorp Developer](https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/aws-adapter).

Find auto-generated API docs for this package [here](./docs/API.md).
