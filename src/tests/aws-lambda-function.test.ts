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
        \\"resource\\": {
          \\"aws_cloudcontrolapi_resource\\": {
            \\"adapter_lambda8B5974B5_06304D76\\": {
              \\"desired_state\\": \\"\${jsonencode({Code = {ZipFile = \\\\\\"def main(event, context):    \\\\\\\\nprint(\\\\\\\\\\\\\\"I'm running!\\\\\\\\\\\\\\")\\\\\\"}, Role = jsondecode(aws_cloudcontrolapi_resource.adapter_lambdaServiceRole494E4CA6_7D4D29EC.properties)[\\\\\\"Arn\\\\\\"], Handler = \\\\\\"index.main\\\\\\", Runtime = \\\\\\"python3.6\\\\\\", Timeout = 300})}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
            },
            \\"adapter_lambdaServiceRole494E4CA6_7D4D29EC\\": {
              \\"desired_state\\": \\"\${jsonencode({AssumeRolePolicyDocument = {Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = \\\\\\"lambda.amazonaws.com\\\\\\"}}], Version = \\\\\\"2012-10-17\\\\\\"}, ManagedPolicyArns = [join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])]})}\\",
              \\"type_name\\": \\"AWS::IAM::Role\\"
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
