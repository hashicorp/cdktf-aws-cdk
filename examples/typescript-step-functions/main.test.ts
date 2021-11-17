import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { StepFunctionsStack } from "./main";

describe("typescript-step-functions", () => {
  it("should synthesize", () => {
    const stack = new StepFunctionsStack(Testing.app(), "test");

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
              \\"desired_state\\": \\"\${jsonencode({Code = {ZipFile = \\\\\\"\\\\\\\\n        const generate = () => Math.random().toString(36).substring(7);\\\\\\\\n    \\\\\\\\n        exports.handler = async () => ({\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\": generate()});\\\\\\\\n      \\\\\\"}, Role = jsondecode(aws_cloudcontrolapi_resource.adapter_GenerateIDServiceRoleF74DC5CE_608D8F11.properties)[\\\\\\"Arn\\\\\\"], Handler = \\\\\\"index.handler\\\\\\", Runtime = \\\\\\"nodejs12.x\\\\\\"})}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
            },
            \\"adapter_GenerateIDServiceRoleF74DC5CE_608D8F11\\": {
              \\"desired_state\\": \\"\${jsonencode({AssumeRolePolicyDocument = {Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = \\\\\\"lambda.amazonaws.com\\\\\\"}}], Version = \\\\\\"2012-10-17\\\\\\"}, ManagedPolicyArns = [join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])]})}\\",
              \\"type_name\\": \\"AWS::IAM::Role\\"
            },
            \\"adapter_ReverseIDCAE3EB2F_3AAF546B\\": {
              \\"desired_state\\": \\"\${jsonencode({Code = {ZipFile = \\\\\\"\\\\\\\\n        const reverse = (str) => (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);\\\\\\\\n    \\\\\\\\n        exports.handler = async (state) => ({\\\\\\\\\\\\\\"value\\\\\\\\\\\\\\": reverse(state.value)});\\\\\\\\n      \\\\\\"}, Role = jsondecode(aws_cloudcontrolapi_resource.adapter_ReverseIDServiceRole83F2457F_A64F905C.properties)[\\\\\\"Arn\\\\\\"], Handler = \\\\\\"index.handler\\\\\\", Runtime = \\\\\\"nodejs12.x\\\\\\"})}\\",
              \\"type_name\\": \\"AWS::Lambda::Function\\"
            },
            \\"adapter_ReverseIDServiceRole83F2457F_A64F905C\\": {
              \\"desired_state\\": \\"\${jsonencode({AssumeRolePolicyDocument = {Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = \\\\\\"lambda.amazonaws.com\\\\\\"}}], Version = \\\\\\"2012-10-17\\\\\\"}, ManagedPolicyArns = [join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])]})}\\",
              \\"type_name\\": \\"AWS::IAM::Role\\"
            },
            \\"adapter_StateMachine2E01A3A5_637DDDC7\\": {
              \\"desired_state\\": \\"\${jsonencode({RoleArn = jsondecode(aws_cloudcontrolapi_resource.adapter_StateMachineRoleB840431D_34E24F0D.properties)[\\\\\\"Arn\\\\\\"], DefinitionString = join(\\\\\\"\\\\\\", [\\\\\\"{\\\\\\\\\\\\\\"StartAt\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Generate ID\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"States\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"Generate ID\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"Next\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Wait 1 Second\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Retry\\\\\\\\\\\\\\":[{\\\\\\\\\\\\\\"ErrorEquals\\\\\\\\\\\\\\":[\\\\\\\\\\\\\\"Lambda.ServiceException\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Lambda.AWSLambdaException\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Lambda.SdkClientException\\\\\\\\\\\\\\"],\\\\\\\\\\\\\\"IntervalSeconds\\\\\\\\\\\\\\":2,\\\\\\\\\\\\\\"MaxAttempts\\\\\\\\\\\\\\":6,\\\\\\\\\\\\\\"BackoffRate\\\\\\\\\\\\\\":2}],\\\\\\\\\\\\\\"Type\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Task\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"OutputPath\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"$.Payload\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Resource\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":states:::lambda:invoke\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Parameters\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"FunctionName\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\", jsondecode(aws_cloudcontrolapi_resource.adapter_GenerateID513CE4A3_C89CDB98.properties)[\\\\\\"Arn\\\\\\"], \\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Payload.$\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"$\\\\\\\\\\\\\\"}},\\\\\\\\\\\\\\"Wait 1 Second\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"Type\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Wait\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Seconds\\\\\\\\\\\\\\":1,\\\\\\\\\\\\\\"Next\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Reverse ID\\\\\\\\\\\\\\"},\\\\\\\\\\\\\\"Reverse ID\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"End\\\\\\\\\\\\\\":true,\\\\\\\\\\\\\\"Retry\\\\\\\\\\\\\\":[{\\\\\\\\\\\\\\"ErrorEquals\\\\\\\\\\\\\\":[\\\\\\\\\\\\\\"Lambda.ServiceException\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Lambda.AWSLambdaException\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Lambda.SdkClientException\\\\\\\\\\\\\\"],\\\\\\\\\\\\\\"IntervalSeconds\\\\\\\\\\\\\\":2,\\\\\\\\\\\\\\"MaxAttempts\\\\\\\\\\\\\\":6,\\\\\\\\\\\\\\"BackoffRate\\\\\\\\\\\\\\":2}],\\\\\\\\\\\\\\"Type\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"Task\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"OutputPath\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"$.Payload\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Resource\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":states:::lambda:invoke\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Parameters\\\\\\\\\\\\\\":{\\\\\\\\\\\\\\"FunctionName\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"\\\\\\", jsondecode(aws_cloudcontrolapi_resource.adapter_ReverseIDCAE3EB2F_3AAF546B.properties)[\\\\\\"Arn\\\\\\"], \\\\\\"\\\\\\\\\\\\\\",\\\\\\\\\\\\\\"Payload.$\\\\\\\\\\\\\\":\\\\\\\\\\\\\\"$\\\\\\\\\\\\\\"}}},\\\\\\\\\\\\\\"TimeoutSeconds\\\\\\\\\\\\\\":300}\\\\\\"])})}\\",
              \\"type_name\\": \\"AWS::StepFunctions::StateMachine\\"
            },
            \\"adapter_StateMachineRoleB840431D_34E24F0D\\": {
              \\"desired_state\\": \\"\${jsonencode({AssumeRolePolicyDocument = {Statement = [{Action = \\\\\\"sts:AssumeRole\\\\\\", Effect = \\\\\\"Allow\\\\\\", Principal = {Service = join(\\\\\\"\\\\\\", [\\\\\\"states.\\\\\\", data.aws_region.adapter_aws-region_F8878EF0.name, \\\\\\".amazonaws.com\\\\\\"])}}], Version = \\\\\\"2012-10-17\\\\\\"}})}\\",
              \\"type_name\\": \\"AWS::IAM::Role\\"
            }
          },
          \\"aws_iam_policy\\": {
            \\"adapter_StateMachineRoleDefaultPolicyDF1E6607_28877BB8\\": {
              \\"policy\\": \\"\${jsonencode({Statement = [{Action = \\\\\\"lambda:InvokeFunction\\\\\\", Effect = \\\\\\"Allow\\\\\\", Resource = jsondecode(aws_cloudcontrolapi_resource.adapter_GenerateID513CE4A3_C89CDB98.properties)[\\\\\\"Arn\\\\\\"]}, {Action = \\\\\\"lambda:InvokeFunction\\\\\\", Effect = \\\\\\"Allow\\\\\\", Resource = jsondecode(aws_cloudcontrolapi_resource.adapter_ReverseIDCAE3EB2F_3AAF546B.properties)[\\\\\\"Arn\\\\\\"]}], Version = \\\\\\"2012-10-17\\\\\\"})}\\"
            }
          },
          \\"aws_iam_role_policy_attachment\\": {
            \\"adapter_StateMachineRoleDefaultPolicyDF1E6607_role0_4C4F3BCD\\": {
              \\"policy_arn\\": \\"\${aws_iam_policy.adapter_StateMachineRoleDefaultPolicyDF1E6607_28877BB8.arn}\\",
              \\"role\\": \\"\${jsondecode(aws_cloudcontrolapi_resource.adapter_StateMachineRoleB840431D_34E24F0D.properties)[\\\\\\"Ref\\\\\\"]}\\"
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
