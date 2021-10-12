import { aws_lambda, Duration } from "aws-cdk-lib";
import { Aspects, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { AwsTerraformAdapter } from "../src/aws-adapter";

describe("lambda function", () => {
  it("should synthesize", () => {
    const res = Testing.synthScope((scope) => {
      const awsAdapter = new AwsTerraformAdapter(scope, "adapter");

      new aws_lambda.Function(awsAdapter, "lambda", {
        code: new aws_lambda.InlineCode(
          `def main(event, context):    \nprint("I'm running!")`
        ),
        handler: "index.main",
        timeout: Duration.seconds(300),
        runtime: aws_lambda.Runtime.PYTHON_3_6,
      });

      // Aspects are currently not invoked via Testing.synth / Testing.synthScope
      // This makes sure the AWS Adapter converts all constructs to cdktf
      Aspects.of(scope).all.forEach((aspect) => aspect.visit(scope));
    });

    expect(res).toMatchInlineSnapshot(`
      "{
        \\"data\\": {
          \\"aws_partition\\": {
            \\"adapter_aws-partition_5B16AD9D\\": {}
          }
        },
        \\"resource\\": {
          \\"aws_cloudcontrolapi_resource\\": {
            \\"adapter_lambda8B5974B5_06304D76\\": {
              \\"desired_state\\": \\"{\\\\\\"Code\\\\\\":{\\\\\\"ZipFile\\\\\\":\\\\\\"def main(event, context):    \\\\\\\\nprint(\\\\\\\\\\\\\\"I'm running!\\\\\\\\\\\\\\")\\\\\\"},\\\\\\"Role\\\\\\":\\\\\\"\${aws_iam_role.adapter_lambdaServiceRole494E4CA6_7D4D29EC.arn}\\\\\\",\\\\\\"Handler\\\\\\":\\\\\\"index.main\\\\\\",\\\\\\"Runtime\\\\\\":\\\\\\"python3.6\\\\\\",\\\\\\"Timeout\\\\\\":300}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
            }
          },
          \\"aws_iam_role\\": {
            \\"adapter_lambdaServiceRole494E4CA6_7D4D29EC\\": {
              \\"assume_role_policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":\\\\\\"lambda.amazonaws.com\\\\\\"}}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\",
              \\"managed_policy_arns\\": [
                \\"\${join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])}\\"
              ]
            }
          }
        }
      }"
    `);
    // TODO: assert more targeted here
    // expect(res).toHaveResourceWithProperties(awscc.LambdaFunction, {
    //     code: { zipFile: `def main(event, context):    \nprint("I'm running!")` },
    // });
  });
});
