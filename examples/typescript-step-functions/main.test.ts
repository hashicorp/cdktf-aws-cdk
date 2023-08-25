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
        "data": {
          "aws_partition": {
            "adapter_aws-partition_5B16AD9D": {
            }
          },
          "aws_region": {
            "adapter_aws-region_F8878EF0": {
            }
          }
        },
        "provider": {
          "aws": [
            {
              "region": "us-west-2"
            }
          ],
          "time": [
            {
              "alias": "awsadapter_eventual_consistency_workaround_aspect_test"
            }
          ]
        },
        "resource": {
          "aws_cloudcontrolapi_resource": {
            "adapter_GenerateID513CE4A3_C89CDB98": {
              "depends_on": [
                "time_sleep.adapter_GenerateIDServiceRoleF74DC5CE_sleep_GenerateIDServiceRoleF74DC5CE_5B8F208D"
              ],
              "desired_state": "\${jsonencode({\\"Code\\" = {\\"ZipFile\\" = \\"\\\\n        const generate = () => Math.random().toString(36).substring(7);\\\\n    \\\\n        exports.handler = async () => ({\\\\\\"value\\\\\\": generate()});\\\\n      \\"}, \\"Handler\\" = \\"index.handler\\", \\"Role\\" = aws_iam_role.adapter_GenerateIDServiceRoleF74DC5CE_608D8F11.arn, \\"Runtime\\" = \\"nodejs12.x\\"})}",
              "type_name": "AWS::Lambda::Function"
            },
            "adapter_ReverseIDCAE3EB2F_3AAF546B": {
              "depends_on": [
                "time_sleep.adapter_ReverseIDServiceRole83F2457F_sleep_ReverseIDServiceRole83F2457F_CDD6B2BC"
              ],
              "desired_state": "\${jsonencode({\\"Code\\" = {\\"ZipFile\\" = \\"\\\\n        const reverse = (str) => (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);\\\\n    \\\\n        exports.handler = async (state) => ({\\\\\\"value\\\\\\": reverse(state.value)});\\\\n      \\"}, \\"Handler\\" = \\"index.handler\\", \\"Role\\" = aws_iam_role.adapter_ReverseIDServiceRole83F2457F_A64F905C.arn, \\"Runtime\\" = \\"nodejs12.x\\"})}",
              "type_name": "AWS::Lambda::Function"
            },
            "adapter_StateMachine2E01A3A5_637DDDC7": {
              "depends_on": [
                "time_sleep.adapter_StateMachineRoleB840431D_sleep_StateMachineRoleB840431D_89BC4BE8"
              ],
              "desired_state": "\${jsonencode({\\"DefinitionString\\" = join(\\"\\", [\\"{\\\\\\"StartAt\\\\\\":\\\\\\"Generate ID\\\\\\",\\\\\\"States\\\\\\":{\\\\\\"Generate ID\\\\\\":{\\\\\\"Next\\\\\\":\\\\\\"Wait 1 Second\\\\\\",\\\\\\"Retry\\\\\\":[{\\\\\\"ErrorEquals\\\\\\":[\\\\\\"Lambda.ClientExecutionTimeoutException\\\\\\",\\\\\\"Lambda.ServiceException\\\\\\",\\\\\\"Lambda.AWSLambdaException\\\\\\",\\\\\\"Lambda.SdkClientException\\\\\\"],\\\\\\"IntervalSeconds\\\\\\":2,\\\\\\"MaxAttempts\\\\\\":6,\\\\\\"BackoffRate\\\\\\":2}],\\\\\\"Type\\\\\\":\\\\\\"Task\\\\\\",\\\\\\"OutputPath\\\\\\":\\\\\\"$.Payload\\\\\\",\\\\\\"Resource\\\\\\":\\\\\\"arn:\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\":states:::lambda:invoke\\\\\\",\\\\\\"Parameters\\\\\\":{\\\\\\"FunctionName\\\\\\":\\\\\\"\\", jsondecode(aws_cloudcontrolapi_resource.adapter_GenerateID513CE4A3_C89CDB98.properties).Arn, \\"\\\\\\",\\\\\\"Payload.$\\\\\\":\\\\\\"$\\\\\\"}},\\\\\\"Wait 1 Second\\\\\\":{\\\\\\"Type\\\\\\":\\\\\\"Wait\\\\\\",\\\\\\"Seconds\\\\\\":1,\\\\\\"Next\\\\\\":\\\\\\"Reverse ID\\\\\\"},\\\\\\"Reverse ID\\\\\\":{\\\\\\"End\\\\\\":true,\\\\\\"Retry\\\\\\":[{\\\\\\"ErrorEquals\\\\\\":[\\\\\\"Lambda.ClientExecutionTimeoutException\\\\\\",\\\\\\"Lambda.ServiceException\\\\\\",\\\\\\"Lambda.AWSLambdaException\\\\\\",\\\\\\"Lambda.SdkClientException\\\\\\"],\\\\\\"IntervalSeconds\\\\\\":2,\\\\\\"MaxAttempts\\\\\\":6,\\\\\\"BackoffRate\\\\\\":2}],\\\\\\"Type\\\\\\":\\\\\\"Task\\\\\\",\\\\\\"OutputPath\\\\\\":\\\\\\"$.Payload\\\\\\",\\\\\\"Resource\\\\\\":\\\\\\"arn:\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\":states:::lambda:invoke\\\\\\",\\\\\\"Parameters\\\\\\":{\\\\\\"FunctionName\\\\\\":\\\\\\"\\", jsondecode(aws_cloudcontrolapi_resource.adapter_ReverseIDCAE3EB2F_3AAF546B.properties).Arn, \\"\\\\\\",\\\\\\"Payload.$\\\\\\":\\\\\\"$\\\\\\"}}},\\\\\\"TimeoutSeconds\\\\\\":300}\\"]), \\"RoleArn\\" = aws_iam_role.adapter_StateMachineRoleB840431D_34E24F0D.arn})}",
              "type_name": "AWS::StepFunctions::StateMachine"
            }
          },
          "aws_iam_policy": {
            "adapter_StateMachineRoleDefaultPolicyDF1E6607_28877BB8": {
              "policy": "\${jsonencode({\\"Statement\\" = [{\\"Action\\" = \\"lambda:InvokeFunction\\", \\"Effect\\" = \\"Allow\\", \\"Resource\\" = [jsondecode(aws_cloudcontrolapi_resource.adapter_GenerateID513CE4A3_C89CDB98.properties).Arn, join(\\"\\", [jsondecode(aws_cloudcontrolapi_resource.adapter_GenerateID513CE4A3_C89CDB98.properties).Arn, \\":*\\"])]}, {\\"Action\\" = \\"lambda:InvokeFunction\\", \\"Effect\\" = \\"Allow\\", \\"Resource\\" = [jsondecode(aws_cloudcontrolapi_resource.adapter_ReverseIDCAE3EB2F_3AAF546B.properties).Arn, join(\\"\\", [jsondecode(aws_cloudcontrolapi_resource.adapter_ReverseIDCAE3EB2F_3AAF546B.properties).Arn, \\":*\\"])]}], \\"Version\\" = \\"2012-10-17\\"})}"
            }
          },
          "aws_iam_role": {
            "adapter_GenerateIDServiceRoleF74DC5CE_608D8F11": {
              "assume_role_policy": "\${jsonencode({\\"Statement\\" = [{\\"Action\\" = \\"sts:AssumeRole\\", \\"Effect\\" = \\"Allow\\", \\"Principal\\" = {\\"Service\\" = \\"lambda.amazonaws.com\\"}}], \\"Version\\" = \\"2012-10-17\\"})}",
              "managed_policy_arns": [
                "\${join(\\"\\", [\\"arn:\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\"])}"
              ]
            },
            "adapter_ReverseIDServiceRole83F2457F_A64F905C": {
              "assume_role_policy": "\${jsonencode({\\"Statement\\" = [{\\"Action\\" = \\"sts:AssumeRole\\", \\"Effect\\" = \\"Allow\\", \\"Principal\\" = {\\"Service\\" = \\"lambda.amazonaws.com\\"}}], \\"Version\\" = \\"2012-10-17\\"})}",
              "managed_policy_arns": [
                "\${join(\\"\\", [\\"arn:\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\"])}"
              ]
            },
            "adapter_StateMachineRoleB840431D_34E24F0D": {
              "assume_role_policy": "\${jsonencode({\\"Statement\\" = [{\\"Action\\" = \\"sts:AssumeRole\\", \\"Effect\\" = \\"Allow\\", \\"Principal\\" = {\\"Service\\" = \\"ServiceprincipalMap\\"[data.aws_region.adapter_aws-region_F8878EF0.name].states}}], \\"Version\\" = \\"2012-10-17\\"})}"
            }
          },
          "aws_iam_role_policy_attachment": {
            "adapter_StateMachineRoleDefaultPolicyDF1E6607_role0_4C4F3BCD": {
              "policy_arn": "\${aws_iam_policy.adapter_StateMachineRoleDefaultPolicyDF1E6607_28877BB8.arn}",
              "role": "\${aws_iam_role.adapter_StateMachineRoleB840431D_34E24F0D.id}"
            }
          },
          "time_sleep": {
            "adapter_GenerateIDServiceRoleF74DC5CE_sleep_GenerateIDServiceRoleF74DC5CE_5B8F208D": {
              "create_duration": "20s",
              "depends_on": [
                "aws_iam_role.adapter_GenerateIDServiceRoleF74DC5CE_608D8F11"
              ],
              "destroy_duration": "0s",
              "provider": "time.awsadapter_eventual_consistency_workaround_aspect_test"
            },
            "adapter_ReverseIDServiceRole83F2457F_sleep_ReverseIDServiceRole83F2457F_CDD6B2BC": {
              "create_duration": "20s",
              "depends_on": [
                "aws_iam_role.adapter_ReverseIDServiceRole83F2457F_A64F905C"
              ],
              "destroy_duration": "0s",
              "provider": "time.awsadapter_eventual_consistency_workaround_aspect_test"
            },
            "adapter_StateMachineRoleB840431D_sleep_StateMachineRoleB840431D_89BC4BE8": {
              "create_duration": "20s",
              "depends_on": [
                "aws_iam_role.adapter_StateMachineRoleB840431D_34E24F0D"
              ],
              "destroy_duration": "0s",
              "provider": "time.awsadapter_eventual_consistency_workaround_aspect_test"
            }
          }
        },
        "terraform": {
          "required_providers": {
            "aws": {
              "source": "aws",
              "version": "3.76.1"
            },
            "time": {
              "source": "time",
              "version": "0.7.2"
            }
          }
        }
      }"
    `);
  });
});
