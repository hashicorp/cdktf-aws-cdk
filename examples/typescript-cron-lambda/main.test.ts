import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { CronLambdaStack } from "./main";

describe("typescript-cron-lambda", () => {
  it("should synthesize", () => {
    const stack = new CronLambdaStack(Testing.app(), "test");

    const synthResult = Testing.synth(stack);

    expect(synthResult).toMatchInlineSnapshot(`
      "{
        \\"data\\": {
          \\"aws_partition\\": {
            \\"adapter_aws-partition_5B16AD9D\\": {}
          }
        },
        \\"provider\\": {
          \\"aws\\": [
            {
              \\"region\\": \\"us-west-2\\"
            }
          ]
        },
        \\"resource\\": {
          \\"aws_cloudcontrolapi_resource\\": {
            \\"adapter_lambda8B5974B5_06304D76\\": {
              \\"desired_state\\": \\"\${jsonencode({Code = {ZipFile = \\\\\\"def main(event, context):\\\\\\\\n    print(\\\\\\\\\\\\\\"I'm running!\\\\\\\\\\\\\\")\\\\\\"}, Role = jsondecode(aws_cloudcontrolapi_resource.adapter_lambdaServiceRole494E4CA6_7D4D29EC.properties)[\\\\\\"Arn\\\\\\"], Handler = \\\\\\"index.main\\\\\\", Runtime = \\\\\\"python3.6\\\\\\", Timeout = 300})}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
            },
            \\"adapter_lambdaServiceRole494E4CA6_7D4D29EC\\": {
              \\"desired_state\\": \\"\${jsonencode({AssumeRolePolicyDocument = {Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = \\\\\\"lambda.amazonaws.com\\\\\\"}}], Version = \\\\\\"2012-10-17\\\\\\"}, ManagedPolicyArns = [join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])]})}\\",
              \\"type_name\\": \\"AWS::IAM::Role\\"
            }
          },
          \\"aws_cloudwatch_event_rule\\": {
            \\"adapter_ruleF2C1DCDC_10BF962A\\": {
              \\"is_enabled\\": true,
              \\"schedule_expression\\": \\"cron(0 18 ? * MON-FRI *)\\"
            }
          },
          \\"aws_cloudwatch_event_target\\": {
            \\"adapter_ruleF2C1DCDC_target0_82E1D1E6\\": {
              \\"arn\\": \\"\${jsondecode(aws_cloudcontrolapi_resource.adapter_lambda8B5974B5_06304D76.properties)[\\\\\\"Arn\\\\\\"]}\\",
              \\"rule\\": \\"\${aws_cloudwatch_event_rule.adapter_ruleF2C1DCDC_10BF962A.id}\\"
            }
          },
          \\"aws_lambda_permission\\": {
            \\"adapter_ruleAllowEventRuleadapterlambdaFD1ADB594D612405_A1E85F36\\": {
              \\"action\\": \\"lambda:InvokeFunction\\",
              \\"function_name\\": \\"\${jsondecode(aws_cloudcontrolapi_resource.adapter_lambda8B5974B5_06304D76.properties)[\\\\\\"Arn\\\\\\"]}\\",
              \\"principal\\": \\"events.amazonaws.com\\",
              \\"source_arn\\": \\"\${aws_cloudwatch_event_rule.adapter_ruleF2C1DCDC_10BF962A.arn}\\"
            }
          }
        },
        \\"terraform\\": {
          \\"required_providers\\": {
            \\"aws\\": {
              \\"source\\": \\"aws\\",
              \\"version\\": \\"~> 3.0\\"
            }
          }
        }
      }"
    `);
  });
});
