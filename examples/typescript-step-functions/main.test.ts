import { Aspects, Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { StepFunctionsStack } from "./main";

describe("typescript-state-machine", () => {
  it("should synthesize", () => {
    const stack = new StepFunctionsStack(Testing.app(), "test");

    // Aspects are currently not invoked via Testing.synth / Testing.synthScope
    // This makes sure the AWS Adapter converts all constructs to cdktf
    Aspects.of(stack).all.forEach((aspect) => aspect.visit(stack));

    const synthResult = Testing.synth(stack);

    expect(synthResult).toMatchInlineSnapshot(`
      "{
        \\"data\\": {
          \\"aws_partition\\": {
            \\"adapter_aws-partition_5B16AD9D\\": {}
          },
          \\"aws_region\\": {
            \\"adapter_aws-region_F8878EF0\\": {}
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
            \\"adapter_GenerateID513CE4A3_C89CDB98\\": {
              \\"desired_state\\": \\"{\\\\\\"Code\\\\\\":{\\\\\\"ZipFile\\\\\\":\\\\\\"\\\\\\\\n        const generate = () => Math.random().toString(36).substring(7);\\\\\\\\n    \\\\\\\\n        exports.handler = async () => ({\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\": generate()});\\\\\\\\n      \\\\\\"},\\\\\\"Role\\\\\\":\\\\\\"\${aws_iam_role.adapter_GenerateIDServiceRoleF74DC5CE_608D8F11.arn}\\\\\\",\\\\\\"Handler\\\\\\":\\\\\\"index.handler\\\\\\",\\\\\\"Runtime\\\\\\":\\\\\\"nodejs12.x\\\\\\"}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
            },
            \\"adapter_ReverseIDCAE3EB2F_3AAF546B\\": {
              \\"desired_state\\": \\"{\\\\\\"Code\\\\\\":{\\\\\\"ZipFile\\\\\\":\\\\\\"\\\\\\\\n        const reverse = (str) => (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);\\\\\\\\n    \\\\\\\\n        exports.handler = async (state) => ({\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\": reverse(state.value)});\\\\\\\\n      \\\\\\"},\\\\\\"Role\\\\\\":\\\\\\"\${aws_iam_role.adapter_ReverseIDServiceRole83F2457F_A64F905C.arn}\\\\\\",\\\\\\"Handler\\\\\\":\\\\\\"index.handler\\\\\\",\\\\\\"Runtime\\\\\\":\\\\\\"nodejs12.x\\\\\\"}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
            },
            \\"adapter_StateMachine2E01A3A5_637DDDC7\\": {
              \\"desired_state\\": \\"{\\\\\\"RoleArn\\\\\\":\\\\\\"\${aws_iam_role.adapter_StateMachineRoleB840431D_34E24F0D.arn}\\\\\\",\\\\\\"DefinitionString\\\\\\":\\\\\\"\${join(\\\\\\"\\\\\\", [\\\\\\"{\\\\\\"StartAt\\\\\\":\\\\\\"Generate ID\\\\\\",\\\\\\"States\\\\\\":{\\\\\\"Generate ID\\\\\\":{\\\\\\"Next\\\\\\":\\\\\\"Wait 1 Second\\\\\\",\\\\\\"Retry\\\\\\":[{\\\\\\"ErrorEquals\\\\\\":[\\\\\\"Lambda.ServiceException\\\\\\",\\\\\\"Lambda.AWSLambdaException\\\\\\",\\\\\\"Lambda.SdkClientException\\\\\\"],\\\\\\"IntervalSeconds\\\\\\":2,\\\\\\"MaxAttempts\\\\\\":6,\\\\\\"BackoffRate\\\\\\":2}],\\\\\\"Type\\\\\\":\\\\\\"Task\\\\\\",\\\\\\"OutputPath\\\\\\":\\\\\\"$.Payload\\\\\\",\\\\\\"Resource\\\\\\":\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":states:::lambda:invoke\\\\\\",\\\\\\"Parameters\\\\\\":{\\\\\\"FunctionName\\\\\\":\\\\\\"\\\\\\", jsondecode(aws_cloudcontrolapi_resource.adapter_GenerateID513CE4A3_C89CDB98.properties)[\\\\\\"Arn\\\\\\"], \\\\\\"\\\\\\",\\\\\\"Payload.$\\\\\\":\\\\\\"$\\\\\\"}},\\\\\\"Wait 1 Second\\\\\\":{\\\\\\"Type\\\\\\":\\\\\\"Wait\\\\\\",\\\\\\"Seconds\\\\\\":1,\\\\\\"Next\\\\\\":\\\\\\"Reverse ID\\\\\\"},\\\\\\"Reverse ID\\\\\\":{\\\\\\"End\\\\\\":true,\\\\\\"Retry\\\\\\":[{\\\\\\"ErrorEquals\\\\\\":[\\\\\\"Lambda.ServiceException\\\\\\",\\\\\\"Lambda.AWSLambdaException\\\\\\",\\\\\\"Lambda.SdkClientException\\\\\\"],\\\\\\"IntervalSeconds\\\\\\":2,\\\\\\"MaxAttempts\\\\\\":6,\\\\\\"BackoffRate\\\\\\":2}],\\\\\\"Type\\\\\\":\\\\\\"Task\\\\\\",\\\\\\"OutputPath\\\\\\":\\\\\\"$.Payload\\\\\\",\\\\\\"Resource\\\\\\":\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":states:::lambda:invoke\\\\\\",\\\\\\"Parameters\\\\\\":{\\\\\\"FunctionName\\\\\\":\\\\\\"\\\\\\", jsondecode(aws_cloudcontrolapi_resource.adapter_ReverseIDCAE3EB2F_3AAF546B.properties)[\\\\\\"Arn\\\\\\"], \\\\\\"\\\\\\",\\\\\\"Payload.$\\\\\\":\\\\\\"$\\\\\\"}}},\\\\\\"TimeoutSeconds\\\\\\":300}\\\\\\"])}\\\\\\"}\\",
              \\"type_name\\": \\"AWS::StepFunctions::StateMachine\\"
            }
          },
          \\"aws_iam_policy\\": {
            \\"adapter_StateMachineRoleDefaultPolicyDF1E6607_28877BB8\\": {
              \\"policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"lambda:InvokeFunction\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Resource\\\\\\":\\\\\\"\${jsondecode(aws_cloudcontrolapi_resource.adapter_GenerateID513CE4A3_C89CDB98.properties)[\\\\\\"Arn\\\\\\"]}\\\\\\"},{\\\\\\"Action\\\\\\":\\\\\\"lambda:InvokeFunction\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Resource\\\\\\":\\\\\\"\${jsondecode(aws_cloudcontrolapi_resource.adapter_ReverseIDCAE3EB2F_3AAF546B.properties)[\\\\\\"Arn\\\\\\"]}\\\\\\"}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\"
            }
          },
          \\"aws_iam_role\\": {
            \\"adapter_GenerateIDServiceRoleF74DC5CE_608D8F11\\": {
              \\"assume_role_policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":\\\\\\"lambda.amazonaws.com\\\\\\"}}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\",
              \\"managed_policy_arns\\": [
                \\"\${join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])}\\"
              ]
            },
            \\"adapter_ReverseIDServiceRole83F2457F_A64F905C\\": {
              \\"assume_role_policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":\\\\\\"lambda.amazonaws.com\\\\\\"}}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\",
              \\"managed_policy_arns\\": [
                \\"\${join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])}\\"
              ]
            },
            \\"adapter_StateMachineRoleB840431D_34E24F0D\\": {
              \\"assume_role_policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":\\\\\\"\${join(\\\\\\"\\\\\\", [\\\\\\"states.\\\\\\", data.aws_region.adapter_aws-region_F8878EF0.name, \\\\\\".amazonaws.com\\\\\\"])}\\\\\\"}}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\"
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
