import { Aspects, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { CronLambdaStack } from "./main";

describe("typescript-cron-lambda", () => {
  it("should synthesize", () => {
    const stack = new CronLambdaStack(Testing.app(), "test");

    // Aspects are currently not invoked via Testing.synth / Testing.synthScope
    // This makes sure the AWS Adapter converts all constructs to cdktf
    // TODO: link to GH issue for this shortcoming
    Aspects.of(stack).all.forEach((aspect) => aspect.visit(stack));

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
              \\"desired_state\\": \\"{\\\\\\"Code\\\\\\":{\\\\\\"ZipFile\\\\\\":\\\\\\"def main(event, context):\\\\\\\\n    print(\\\\\\\\\\\\\\"I'm running!\\\\\\\\\\\\\\")\\\\\\"},\\\\\\"Role\\\\\\":\\\\\\"\${aws_iam_role.adapter_lambdaServiceRole494E4CA6_7D4D29EC.arn}\\\\\\",\\\\\\"Handler\\\\\\":\\\\\\"index.main\\\\\\",\\\\\\"Runtime\\\\\\":\\\\\\"python3.6\\\\\\",\\\\\\"Timeout\\\\\\":300}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
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
          \\"aws_iam_role\\": {
            \\"adapter_lambdaServiceRole494E4CA6_7D4D29EC\\": {
              \\"assume_role_policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":\\\\\\"lambda.amazonaws.com\\\\\\"}}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\",
              \\"managed_policy_arns\\": [
                \\"\${join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])}\\"
              ]
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
