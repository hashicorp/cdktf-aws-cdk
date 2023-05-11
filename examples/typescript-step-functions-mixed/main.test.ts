/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { StepFunctionsStack } from "./main";

describe("typescript-state-machine", () => {
  it("should synthesize", () => {
    const stack = new StepFunctionsStack(Testing.app(), "test");

    const synthResult = Testing.synth(stack);

    expect(synthResult).toMatchInlineSnapshot(`
      "{
        \\"data\\": {
          \\"aws_partition\\": {
            \\"adapter_aws-partition_5B16AD9D\\": {
            }
          },
          \\"aws_region\\": {
            \\"adapter_aws-region_F8878EF0\\": {
            }
          }
        },
        \\"output\\": {
          \\"generate-id_generate-id-c8e9be4a2f33ecc14e138a018899daed079e618acb-lambda-arn_39F35C88\\": {
            \\"value\\": \\"\${aws_lambda_function.generate-id_fn_99320B4B.arn}\\"
          },
          \\"reverse-id_reverse-id-c80e28e7990db1dae069bd131f26434d1b4d867e38-lambda-arn_46CC1D58\\": {
            \\"value\\": \\"\${aws_lambda_function.reverse-id_fn_A44557C2.arn}\\"
          }
        },
        \\"provider\\": {
          \\"aws\\": [
            {
              \\"region\\": \\"us-west-2\\"
            }
          ],
          \\"time\\": [
            {
              \\"alias\\": \\"awsadapter_eventual_consistency_workaround_aspect_test\\"
            }
          ]
        },
        \\"resource\\": {
          \\"aws_cloudcontrolapi_resource\\": {
            \\"adapter_StateMachine2E01A3A5_637DDDC7\\": {
              \\"depends_on\\": [
                \\"time_sleep.adapter_StateMachineRoleB840431D_sleep_StateMachineRoleB840431D_89BC4BE8\\"
              ],
              \\"desired_state\\": \\"\${jsonencode({\\\\\\"RoleArn\\\\\\" = aws_iam_role.adapter_StateMachineRoleB840431D_34E24F0D.arn, \\\\\\"DefinitionString\\\\\\" = join(\\\\\\"\\\\\\", [\\\\\\"{\\\\\\\\\\\\\\"StartAt\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Generate ID\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"States\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"Generate ID\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"Next\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Wait 1 Second\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Retry\\\\\\\\\\\\\\":[{\\\\\\\\\\\\\\"ErrorEquals\\\\\\\\\\\\\\":[\\\\\\\\\\\\\\"Lambda.ServiceException\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Lambda.AWSLambdaException\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Lambda.SdkClientException\\\\\\\\\\\\\\"],\\\\\\\\\\\\\\"IntervalSeconds\\\\\\\\\\\\\\":2,\\\\\\\\\\\\\\"MaxAttempts\\\\\\\\\\\\\\":6,\\\\\\\\\\\\\\"BackoffRate\\\\\\\\\\\\\\":2}],\\\\\\\\\\\\\\"Type\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Task\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"OutputPath\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"$.Payload\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Resource\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, join(\\\\\\"\\\\\\", [\\\\\\":states:::lambda:invoke\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Parameters\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"FunctionName\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\", aws_lambda_function.generate-id_fn_99320B4B.arn, \\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Payload.$\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"$\\\\\\\\\\\\\\"}},\\\\\\\\\\\\\\"Wait 1 Second\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"Type\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Wait\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Seconds\\\\\\\\\\\\\\":1,\\\\\\\\\\\\\\"Next\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Reverse ID\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\"Reverse ID\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"End\\\\\\\\\\\\\\":true,\\\\\\\\\\\\\\"Retry\\\\\\\\\\\\\\":[{\\\\\\\\\\\\\\"ErrorEquals\\\\\\\\\\\\\\":[\\\\\\\\\\\\\\"Lambda.ServiceException\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Lambda.AWSLambdaException\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Lambda.SdkClientException\\\\\\\\\\\\\\"],\\\\\\\\\\\\\\"IntervalSeconds\\\\\\\\\\\\\\":2,\\\\\\\\\\\\\\"MaxAttempts\\\\\\\\\\\\\\":6,\\\\\\\\\\\\\\"BackoffRate\\\\\\\\\\\\\\":2}],\\\\\\\\\\\\\\"Type\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Task\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"OutputPath\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"$.Payload\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Resource\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"arn:\\\\\\"]), data.aws_partition.adapter_aws-partition_5B16AD9D.partition, join(\\\\\\"\\\\\\", [\\\\\\":states:::lambda:invoke\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Parameters\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"FunctionName\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\", aws_lambda_function.reverse-id_fn_A44557C2.arn, \\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Payload.$\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"$\\\\\\\\\\\\\\"}}},\\\\\\\\\\\\\\"TimeoutSeconds\\\\\\\\\\\\\\":300}\\\\\\"])])})}\\",
              \\"type_name\\": \\"AWS::StepFunctions::StateMachine\\"
            }
          },
          \\"aws_cloudwatch_log_group\\": {
            \\"generate-id_snoop-log-group_D659273F\\": {
              \\"name\\": \\"/aws/lambda/generate-id-c8e9be4a2f33ecc14e138a018899daed079e618acb\\",
              \\"retention_in_days\\": 7
            },
            \\"reverse-id_snoop-log-group_FAF8FFFD\\": {
              \\"name\\": \\"/aws/lambda/reverse-id-c80e28e7990db1dae069bd131f26434d1b4d867e38\\",
              \\"retention_in_days\\": 7
            }
          },
          \\"aws_iam_policy\\": {
            \\"adapter_StateMachineRoleDefaultPolicyDF1E6607_28877BB8\\": {
              \\"policy\\": \\"\${jsonencode({\\\\\\"Statement\\\\\\" = [{\\\\\\"Action\\\\\\" = \\\\\\"lambda:InvokeFunction\\\\\\", \\\\\\"Effect\\\\\\" = \\\\\\"Allow\\\\\\", \\\\\\"Resource\\\\\\" = aws_lambda_function.generate-id_fn_99320B4B.arn}, {\\\\\\"Action\\\\\\" = \\\\\\"lambda:InvokeFunction\\\\\\", \\\\\\"Effect\\\\\\" = \\\\\\"Allow\\\\\\", \\\\\\"Resource\\\\\\" = aws_lambda_function.reverse-id_fn_A44557C2.arn}], \\\\\\"Version\\\\\\" = \\\\\\"2012-10-17\\\\\\"})}\\"
            },
            \\"generate-id_server-role_role-policy_6FBD6C53\\": {
              \\"name\\": \\"c8db9d3041a90e1d114b187c0e984994c2bd27ae7b-role-policy\\",
              \\"path\\": \\"/\\",
              \\"policy\\": \\"{\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\",\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":[\\\\\\"logs:CreateLogStream\\\\\\",\\\\\\"logs:PutLogEvents\\\\\\"],\\\\\\"Resource\\\\\\":[\\\\\\"\${aws_cloudwatch_log_group.generate-id_snoop-log-group_D659273F.arn}\\\\\\",\\\\\\"\${aws_cloudwatch_log_group.generate-id_snoop-log-group_D659273F.arn}:log-stream:*\\\\\\"],\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\"}]}\\"
            },
            \\"reverse-id_server-role_role-policy_BEA9EC5B\\": {
              \\"name\\": \\"c8a001c1b2c37e8cea98f2ebcfb39a6834c9931a7d-role-policy\\",
              \\"path\\": \\"/\\",
              \\"policy\\": \\"{\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\",\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":[\\\\\\"logs:CreateLogStream\\\\\\",\\\\\\"logs:PutLogEvents\\\\\\"],\\\\\\"Resource\\\\\\":[\\\\\\"\${aws_cloudwatch_log_group.reverse-id_snoop-log-group_FAF8FFFD.arn}\\\\\\",\\\\\\"\${aws_cloudwatch_log_group.reverse-id_snoop-log-group_FAF8FFFD.arn}:log-stream:*\\\\\\"],\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\"}]}\\"
            }
          },
          \\"aws_iam_role\\": {
            \\"adapter_StateMachineRoleB840431D_34E24F0D\\": {
              \\"assume_role_policy\\": \\"\${jsonencode({\\\\\\"Statement\\\\\\" = [{\\\\\\"Action\\\\\\" = \\\\\\"sts:AssumeRole\\\\\\", \\\\\\"Effect\\\\\\" = \\\\\\"Allow\\\\\\", \\\\\\"Principal\\\\\\" = {\\\\\\"Service\\\\\\" = join(\\\\\\"\\\\\\", [\\\\\\"states.\\\\\\", data.aws_region.adapter_aws-region_F8878EF0.name, \\\\\\".amazonaws.com\\\\\\"])}}], \\\\\\"Version\\\\\\" = \\\\\\"2012-10-17\\\\\\"})}\\"
            },
            \\"generate-id_server-role_62418FA4\\": {
              \\"assume_role_policy\\": \\"{\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\",\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":[\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"sts:SetSourceIdentity\\\\\\"],\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":[\\\\\\"lambda.amazonaws.com\\\\\\"]}}]}\\",
              \\"name\\": \\"c8db9d3041a90e1d114b187c0e984994c2bd27ae7b\\"
            },
            \\"reverse-id_server-role_3C5E949B\\": {
              \\"assume_role_policy\\": \\"{\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\",\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":[\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"sts:SetSourceIdentity\\\\\\"],\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":[\\\\\\"lambda.amazonaws.com\\\\\\"]}}]}\\",
              \\"name\\": \\"c8a001c1b2c37e8cea98f2ebcfb39a6834c9931a7d\\"
            }
          },
          \\"aws_iam_role_policy_attachment\\": {
            \\"adapter_StateMachineRoleDefaultPolicyDF1E6607_role0_4C4F3BCD\\": {
              \\"policy_arn\\": \\"\${aws_iam_policy.adapter_StateMachineRoleDefaultPolicyDF1E6607_28877BB8.arn}\\",
              \\"role\\": \\"\${aws_iam_role.adapter_StateMachineRoleB840431D_34E24F0D.id}\\"
            },
            \\"generate-id_server-role_PolicyAttachment_07FBFD85\\": {
              \\"policy_arn\\": \\"\${aws_iam_policy.generate-id_server-role_role-policy_6FBD6C53.arn}\\",
              \\"role\\": \\"\${aws_iam_role.generate-id_server-role_62418FA4.name}\\"
            },
            \\"reverse-id_server-role_PolicyAttachment_A9363212\\": {
              \\"policy_arn\\": \\"\${aws_iam_policy.reverse-id_server-role_role-policy_BEA9EC5B.arn}\\",
              \\"role\\": \\"\${aws_iam_role.reverse-id_server-role_3C5E949B.name}\\"
            }
          },
          \\"aws_lambda_function\\": {
            \\"generate-id_fn_99320B4B\\": {
              \\"depends_on\\": [
                \\"aws_cloudwatch_log_group.generate-id_snoop-log-group_D659273F\\"
              ],
              \\"environment\\": {
                \\"variables\\": {
                }
              },
              \\"filename\\": \\"assets/generate-id_lambda-asset_D3DA57A3/042F8F8D7D08F0E94434B01CC11D8886/archive.zip\\",
              \\"function_name\\": \\"generate-id-c8e9be4a2f33ecc14e138a018899daed079e618acb\\",
              \\"handler\\": \\"fn-generate-id.handler\\",
              \\"memory_size\\": 512,
              \\"role\\": \\"\${aws_iam_role.generate-id_server-role_62418FA4.arn}\\",
              \\"runtime\\": \\"nodejs14.x\\",
              \\"source_code_hash\\": \\"042F8F8D7D08F0E94434B01CC11D8886\\",
              \\"timeout\\": 15
            },
            \\"reverse-id_fn_A44557C2\\": {
              \\"depends_on\\": [
                \\"aws_cloudwatch_log_group.reverse-id_snoop-log-group_FAF8FFFD\\"
              ],
              \\"environment\\": {
                \\"variables\\": {
                }
              },
              \\"filename\\": \\"assets/reverse-id_lambda-asset_4139ACFF/042F8F8D7D08F0E94434B01CC11D8886/archive.zip\\",
              \\"function_name\\": \\"reverse-id-c80e28e7990db1dae069bd131f26434d1b4d867e38\\",
              \\"handler\\": \\"fn-reverse-id.handler\\",
              \\"memory_size\\": 512,
              \\"role\\": \\"\${aws_iam_role.reverse-id_server-role_3C5E949B.arn}\\",
              \\"runtime\\": \\"nodejs14.x\\",
              \\"source_code_hash\\": \\"042F8F8D7D08F0E94434B01CC11D8886\\",
              \\"timeout\\": 15
            }
          },
          \\"time_sleep\\": {
            \\"adapter_StateMachineRoleB840431D_sleep_StateMachineRoleB840431D_89BC4BE8\\": {
              \\"create_duration\\": \\"20s\\",
              \\"depends_on\\": [
                \\"aws_iam_role.adapter_StateMachineRoleB840431D_34E24F0D\\"
              ],
              \\"destroy_duration\\": \\"0s\\",
              \\"provider\\": \\"time.awsadapter_eventual_consistency_workaround_aspect_test\\"
            }
          }
        },
        \\"terraform\\": {
          \\"required_providers\\": {
            \\"aws\\": {
              \\"source\\": \\"aws\\",
              \\"version\\": \\"3.76.1\\"
            },
            \\"time\\": {
              \\"source\\": \\"time\\",
              \\"version\\": \\"0.7.2\\"
            }
          }
        }
      }"
    `);
  });
});
