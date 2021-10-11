"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const cdktf_1 = require("cdktf");
require("cdktf/lib/testing/adapters/jest");
const aws_adapter_1 = require("../aws-adapter");
// import * as awscc from "../../.gen/providers/awscc";
// import * as aws from "@cdktf/provider-aws";
describe("lambda function", () => {
    it("should synthesize", () => {
        const res = cdktf_1.Testing.synthScope((scope) => {
            const awsAdapter = new aws_adapter_1.AwsTerraformAdapter(scope, "adapter");
            new aws_cdk_lib_1.aws_lambda.Function(awsAdapter, "lambda", {
                code: new aws_cdk_lib_1.aws_lambda.InlineCode(`def main(event, context):    \nprint("I'm running!")`),
                handler: "index.main",
                timeout: aws_cdk_lib_1.Duration.seconds(300),
                runtime: aws_cdk_lib_1.aws_lambda.Runtime.PYTHON_3_6,
            });
            // Aspects are currently not invoked via Testing.synth / Testing.synthScope
            // This makes sure the AWS Adapter converts all constructs to cdktf
            cdktf_1.Aspects.of(scope).all.forEach((aspect) => aspect.visit(scope));
        });
        expect(res).toMatchInlineSnapshot(`
"{
  \\"data\\": {
    \\"aws_partition\\": {
      \\"adapter_aws-partition_5B16AD9D\\": {}
    }
  },
  \\"resource\\": {
    \\"aws_iam_role\\": {
      \\"adapter_lambdaServiceRole494E4CA6_7D4D29EC\\": {
        \\"assume_role_policy\\": \\"{\\\\\\"Statement\\\\\\":[{\\\\\\"Action\\\\\\":\\\\\\"sts:AssumeRole\\\\\\",\\\\\\"Effect\\\\\\":\\\\\\"Allow\\\\\\",\\\\\\"Principal\\\\\\":{\\\\\\"Service\\\\\\":\\\\\\"lambda.amazonaws.com\\\\\\"}}],\\\\\\"Version\\\\\\":\\\\\\"2012-10-17\\\\\\"}\\",
        \\"managed_policy_arns\\": [
          \\"\${join(\\\\\\"\\\\\\", [\\\\\\"arn:\\\\\\", data.aws_partition.adapter_aws-partition_5B16AD9D.partition, \\\\\\":iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\\\\\\"])}\\"
        ]
      }
    },
    \\"awscc_lambda_function\\": {
      \\"adapter_lambda8B5974B5_06304D76\\": {
        \\"code\\": {
          \\"zip_file\\": \\"def main(event, context):    \\\\nprint(\\\\\\"I'm running!\\\\\\")\\"
        },
        \\"file_system_configs\\": [],
        \\"handler\\": \\"index.main\\",
        \\"memory_size\\": 128,
        \\"package_type\\": \\"Zip\\",
        \\"role\\": \\"\${aws_iam_role.adapter_lambdaServiceRole494E4CA6_7D4D29EC.arn}\\",
        \\"runtime\\": \\"python3.6\\",
        \\"timeout\\": 300,
        \\"tracing_config\\": {
          \\"mode\\": \\"PassThrough\\"
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWxhbWJkYS1mdW5jdGlvbi50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXdzLWxhbWJkYS1mdW5jdGlvbi50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQW1EO0FBQ25ELGlDQUF5QztBQUN6QywyQ0FBeUM7QUFDekMsZ0RBQXFEO0FBQ3JELHVEQUF1RDtBQUN2RCw4Q0FBOEM7QUFFOUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO1FBQzNCLE1BQU0sR0FBRyxHQUFHLGVBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN2QyxNQUFNLFVBQVUsR0FBRyxJQUFJLGlDQUFtQixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztZQUU3RCxJQUFJLHdCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUU7Z0JBQzVDLElBQUksRUFBRSxJQUFJLHdCQUFVLENBQUMsVUFBVSxDQUM3QixzREFBc0QsQ0FDdkQ7Z0JBQ0QsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE9BQU8sRUFBRSxzQkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSx3QkFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2FBQ3ZDLENBQUMsQ0FBQztZQUVILDJFQUEyRTtZQUMzRSxtRUFBbUU7WUFDbkUsZUFBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUNyQyxDQUFDLENBQUM7UUFDQyxrQ0FBa0M7UUFDbEMsbUVBQW1FO1FBQ25FLGlGQUFpRjtRQUNqRixNQUFNO0lBQ1IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF3c19sYW1iZGEsIER1cmF0aW9uIH0gZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgeyBBc3BlY3RzLCBUZXN0aW5nIH0gZnJvbSBcImNka3RmXCI7XG5pbXBvcnQgXCJjZGt0Zi9saWIvdGVzdGluZy9hZGFwdGVycy9qZXN0XCI7XG5pbXBvcnQgeyBBd3NUZXJyYWZvcm1BZGFwdGVyIH0gZnJvbSBcIi4uL2F3cy1hZGFwdGVyXCI7XG4vLyBpbXBvcnQgKiBhcyBhd3NjYyBmcm9tIFwiLi4vLi4vLmdlbi9wcm92aWRlcnMvYXdzY2NcIjtcbi8vIGltcG9ydCAqIGFzIGF3cyBmcm9tIFwiQGNka3RmL3Byb3ZpZGVyLWF3c1wiO1xuXG5kZXNjcmliZShcImxhbWJkYSBmdW5jdGlvblwiLCAoKSA9PiB7XG4gIGl0KFwic2hvdWxkIHN5bnRoZXNpemVcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IFRlc3Rpbmcuc3ludGhTY29wZSgoc2NvcGUpID0+IHtcbiAgICAgIGNvbnN0IGF3c0FkYXB0ZXIgPSBuZXcgQXdzVGVycmFmb3JtQWRhcHRlcihzY29wZSwgXCJhZGFwdGVyXCIpO1xuXG4gICAgICBuZXcgYXdzX2xhbWJkYS5GdW5jdGlvbihhd3NBZGFwdGVyLCBcImxhbWJkYVwiLCB7XG4gICAgICAgIGNvZGU6IG5ldyBhd3NfbGFtYmRhLklubGluZUNvZGUoXG4gICAgICAgICAgYGRlZiBtYWluKGV2ZW50LCBjb250ZXh0KTogICAgXFxucHJpbnQoXCJJJ20gcnVubmluZyFcIilgXG4gICAgICAgICksXG4gICAgICAgIGhhbmRsZXI6IFwiaW5kZXgubWFpblwiLFxuICAgICAgICB0aW1lb3V0OiBEdXJhdGlvbi5zZWNvbmRzKDMwMCksXG4gICAgICAgIHJ1bnRpbWU6IGF3c19sYW1iZGEuUnVudGltZS5QWVRIT05fM182LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFzcGVjdHMgYXJlIGN1cnJlbnRseSBub3QgaW52b2tlZCB2aWEgVGVzdGluZy5zeW50aCAvIFRlc3Rpbmcuc3ludGhTY29wZVxuICAgICAgLy8gVGhpcyBtYWtlcyBzdXJlIHRoZSBBV1MgQWRhcHRlciBjb252ZXJ0cyBhbGwgY29uc3RydWN0cyB0byBjZGt0ZlxuICAgICAgQXNwZWN0cy5vZihzY29wZSkuYWxsLmZvckVhY2goKGFzcGVjdCkgPT4gYXNwZWN0LnZpc2l0KHNjb3BlKSk7XG4gICAgfSk7XG5cbiAgICBleHBlY3QocmVzKS50b01hdGNoSW5saW5lU25hcHNob3QoYFxuXCJ7XG4gIFxcXFxcImRhdGFcXFxcXCI6IHtcbiAgICBcXFxcXCJhd3NfcGFydGl0aW9uXFxcXFwiOiB7XG4gICAgICBcXFxcXCJhZGFwdGVyX2F3cy1wYXJ0aXRpb25fNUIxNkFEOURcXFxcXCI6IHt9XG4gICAgfVxuICB9LFxuICBcXFxcXCJyZXNvdXJjZVxcXFxcIjoge1xuICAgIFxcXFxcImF3c19pYW1fcm9sZVxcXFxcIjoge1xuICAgICAgXFxcXFwiYWRhcHRlcl9sYW1iZGFTZXJ2aWNlUm9sZTQ5NEU0Q0E2XzdENEQyOUVDXFxcXFwiOiB7XG4gICAgICAgIFxcXFxcImFzc3VtZV9yb2xlX3BvbGljeVxcXFxcIjogXFxcXFwie1xcXFxcXFxcXFxcXFwiU3RhdGVtZW50XFxcXFxcXFxcXFxcXCI6W3tcXFxcXFxcXFxcXFxcIkFjdGlvblxcXFxcXFxcXFxcXFwiOlxcXFxcXFxcXFxcXFwic3RzOkFzc3VtZVJvbGVcXFxcXFxcXFxcXFxcIixcXFxcXFxcXFxcXFxcIkVmZmVjdFxcXFxcXFxcXFxcXFwiOlxcXFxcXFxcXFxcXFwiQWxsb3dcXFxcXFxcXFxcXFxcIixcXFxcXFxcXFxcXFxcIlByaW5jaXBhbFxcXFxcXFxcXFxcXFwiOntcXFxcXFxcXFxcXFxcIlNlcnZpY2VcXFxcXFxcXFxcXFxcIjpcXFxcXFxcXFxcXFxcImxhbWJkYS5hbWF6b25hd3MuY29tXFxcXFxcXFxcXFxcXCJ9fV0sXFxcXFxcXFxcXFxcXCJWZXJzaW9uXFxcXFxcXFxcXFxcXCI6XFxcXFxcXFxcXFxcXCIyMDEyLTEwLTE3XFxcXFxcXFxcXFxcXCJ9XFxcXFwiLFxuICAgICAgICBcXFxcXCJtYW5hZ2VkX3BvbGljeV9hcm5zXFxcXFwiOiBbXG4gICAgICAgICAgXFxcXFwiXFwke2pvaW4oXFxcXFxcXFxcXFxcXCJcXFxcXFxcXFxcXFxcIiwgW1xcXFxcXFxcXFxcXFwiYXJuOlxcXFxcXFxcXFxcXFwiLCBkYXRhLmF3c19wYXJ0aXRpb24uYWRhcHRlcl9hd3MtcGFydGl0aW9uXzVCMTZBRDlELnBhcnRpdGlvbiwgXFxcXFxcXFxcXFxcXCI6aWFtOjphd3M6cG9saWN5L3NlcnZpY2Utcm9sZS9BV1NMYW1iZGFCYXNpY0V4ZWN1dGlvblJvbGVcXFxcXFxcXFxcXFxcIl0pfVxcXFxcIlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcXFxcXCJhd3NjY19sYW1iZGFfZnVuY3Rpb25cXFxcXCI6IHtcbiAgICAgIFxcXFxcImFkYXB0ZXJfbGFtYmRhOEI1OTc0QjVfMDYzMDRENzZcXFxcXCI6IHtcbiAgICAgICAgXFxcXFwiY29kZVxcXFxcIjoge1xuICAgICAgICAgIFxcXFxcInppcF9maWxlXFxcXFwiOiBcXFxcXCJkZWYgbWFpbihldmVudCwgY29udGV4dCk6ICAgIFxcXFxcXFxcbnByaW50KFxcXFxcXFxcXFxcXFwiSSdtIHJ1bm5pbmchXFxcXFxcXFxcXFxcXCIpXFxcXFwiXG4gICAgICAgIH0sXG4gICAgICAgIFxcXFxcImZpbGVfc3lzdGVtX2NvbmZpZ3NcXFxcXCI6IFtdLFxuICAgICAgICBcXFxcXCJoYW5kbGVyXFxcXFwiOiBcXFxcXCJpbmRleC5tYWluXFxcXFwiLFxuICAgICAgICBcXFxcXCJtZW1vcnlfc2l6ZVxcXFxcIjogMTI4LFxuICAgICAgICBcXFxcXCJwYWNrYWdlX3R5cGVcXFxcXCI6IFxcXFxcIlppcFxcXFxcIixcbiAgICAgICAgXFxcXFwicm9sZVxcXFxcIjogXFxcXFwiXFwke2F3c19pYW1fcm9sZS5hZGFwdGVyX2xhbWJkYVNlcnZpY2VSb2xlNDk0RTRDQTZfN0Q0RDI5RUMuYXJufVxcXFxcIixcbiAgICAgICAgXFxcXFwicnVudGltZVxcXFxcIjogXFxcXFwicHl0aG9uMy42XFxcXFwiLFxuICAgICAgICBcXFxcXCJ0aW1lb3V0XFxcXFwiOiAzMDAsXG4gICAgICAgIFxcXFxcInRyYWNpbmdfY29uZmlnXFxcXFwiOiB7XG4gICAgICAgICAgXFxcXFwibW9kZVxcXFxcIjogXFxcXFwiUGFzc1Rocm91Z2hcXFxcXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVwiXG5gKTtcbiAgICAvLyBUT0RPOiBhc3NlcnQgbW9yZSB0YXJnZXRlZCBoZXJlXG4gICAgLy8gZXhwZWN0KHJlcykudG9IYXZlUmVzb3VyY2VXaXRoUHJvcGVydGllcyhhd3NjYy5MYW1iZGFGdW5jdGlvbiwge1xuICAgIC8vICAgICBjb2RlOiB7IHppcEZpbGU6IGBkZWYgbWFpbihldmVudCwgY29udGV4dCk6ICAgIFxcbnByaW50KFwiSSdtIHJ1bm5pbmchXCIpYCB9LFxuICAgIC8vIH0pO1xuICB9KTtcbn0pO1xuIl19