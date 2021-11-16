import { aws_lambda, Duration } from "aws-cdk-lib";
import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { AwsTerraformAdapter } from "../aws-adapter";

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
    });

    expect(res).toMatchInlineSnapshot(`
      "{
        \\"data\\": {
          \\"aws_partition\\": {
            \\"adapter_aws-partition_5B16AD9D\\": {}
          }
        },
        \\"provider\\": {
          \\"time\\": [
            {
              \\"alias\\": \\"awsadapter_eventual_consistency_workaround_aspect\\"
            }
          ]
        },
        \\"resource\\": {
          \\"aws_cloudcontrolapi_resource\\": {
            \\"adapter_lambda8B5974B5_06304D76\\": {
              \\"depends_on\\": [
                \\"time_sleep.adapter_lambdaServiceRole494E4CA6_sleep_lambdaServiceRole494E4CA6_73847BDD\\"
              ],
              \\"desired_state\\": \\"\${jsonencode({Code = {ZipFile = \\\\\\"def main(event, context):    \\\\\\\\nprint(\\\\\\\\\\\\\\"I'm running!\\\\\\\\\\\\\\")\\\\\\"}, Role = aws_iam_role.adapter_lambdaServiceRole494E4CA6_7D4D29EC.arn, Handler = \\\\\\"index.main\\\\\\", Runtime = \\\\\\"python3.6\\\\\\", Timeout = 300})}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
            }
          },
          \\"aws_iam_role\\": {
            \\"adapter_lambdaServiceRole494E4CA6_7D4D29EC\\": {
              \\"assume_role_policy\\": \\"\${jsonencode({Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = \\\\\\"lambda.amazonaws.com\\\\\\"}}], Version = \\\\\\"2012-10-17\\\\\\"})}\\",
              \\"managed_policy_arns\\": [
                \\"\${join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])}\\"
              ]
            }
          },
          \\"time_sleep\\": {
            \\"adapter_lambdaServiceRole494E4CA6_sleep_lambdaServiceRole494E4CA6_73847BDD\\": {
              \\"create_duration\\": \\"20s\\",
              \\"depends_on\\": [
                \\"aws_iam_role.adapter_lambdaServiceRole494E4CA6_7D4D29EC\\"
              ],
              \\"destroy_duration\\": \\"0s\\",
              \\"provider\\": \\"time.awsadapter_eventual_consistency_workaround_aspect\\"
            }
          }
        },
        \\"terraform\\": {
          \\"required_providers\\": {
            \\"time\\": {
              \\"source\\": \\"time\\",
              \\"version\\": \\"~> 0.7.2\\"
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
