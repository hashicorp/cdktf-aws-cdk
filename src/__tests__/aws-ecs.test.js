"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const cdktf_1 = require("cdktf");
require("cdktf/lib/testing/adapters/jest");
const aws_adapter_1 = require("../aws-adapter");
// import * as awscc from "../../.gen/providers/awscc";
// import * as aws from "@cdktf/provider-aws";
describe("ecs cluster", () => {
    it("should synthesize", () => {
        const res = cdktf_1.Testing.synthScope((scope) => {
            const awsAdapter = new aws_adapter_1.AwsTerraformAdapter(scope, "adapter");
            const vpc = new aws_cdk_lib_1.aws_ec2.Vpc(awsAdapter, "MyVpc", {
                maxAzs: 3,
            });
            const cluster = new aws_cdk_lib_1.aws_ecs.Cluster(awsAdapter, "MyCluster", {
                vpc: vpc,
            });
            // Create a load-balanced Fargate service and make it public
            new aws_cdk_lib_1.aws_ecs_patterns.ApplicationLoadBalancedFargateService(awsAdapter, "MyFargateService", {
                cluster: cluster,
                cpu: 256,
                desiredCount: 1,
                taskImageOptions: {
                    image: aws_cdk_lib_1.aws_ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
                },
                memoryLimitMiB: 512,
                publicLoadBalancer: true,
            });
            // Aspects are currently not invoked via Testing.synth / Testing.synthScope
            // This makes sure the AWS Adapter converts all constructs to cdktf
            cdktf_1.Aspects.of(scope).all.forEach((aspect) => aspect.visit(scope));
        });
        expect(res).toMatchInlineSnapshot();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWVjcy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXdzLWVjcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBSXFCO0FBQ3JCLGlDQUF5QztBQUN6QywyQ0FBeUM7QUFDekMsZ0RBQXFEO0FBQ3JELHVEQUF1RDtBQUN2RCw4Q0FBOEM7QUFFOUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsRUFBRSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtRQUMzQixNQUFNLEdBQUcsR0FBRyxlQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxpQ0FBbUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFN0QsTUFBTSxHQUFHLEdBQUcsSUFBSSxxQkFBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFO2dCQUMzQyxNQUFNLEVBQUUsQ0FBQzthQUNWLENBQUMsQ0FBQztZQUVILE1BQU0sT0FBTyxHQUFHLElBQUkscUJBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRTtnQkFDdkQsR0FBRyxFQUFFLEdBQUc7YUFDVCxDQUFDLENBQUM7WUFFSCw0REFBNEQ7WUFDNUQsSUFBSSw4QkFBWSxDQUFDLHFDQUFxQyxDQUNwRCxVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCO2dCQUNFLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixHQUFHLEVBQUUsR0FBRztnQkFDUixZQUFZLEVBQUUsQ0FBQztnQkFDZixnQkFBZ0IsRUFBRTtvQkFDaEIsS0FBSyxFQUFFLHFCQUFHLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQztpQkFDbkU7Z0JBQ0QsY0FBYyxFQUFFLEdBQUc7Z0JBQ25CLGtCQUFrQixFQUFFLElBQUk7YUFDekIsQ0FDRixDQUFDO1lBRUYsMkVBQTJFO1lBQzNFLG1FQUFtRTtZQUNuRSxlQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhd3NfZWMyIGFzIGVjMixcbiAgYXdzX2VjcyBhcyBlY3MsXG4gIGF3c19lY3NfcGF0dGVybnMgYXMgZWNzX3BhdHRlcm5zLFxufSBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCB7IEFzcGVjdHMsIFRlc3RpbmcgfSBmcm9tIFwiY2RrdGZcIjtcbmltcG9ydCBcImNka3RmL2xpYi90ZXN0aW5nL2FkYXB0ZXJzL2plc3RcIjtcbmltcG9ydCB7IEF3c1RlcnJhZm9ybUFkYXB0ZXIgfSBmcm9tIFwiLi4vYXdzLWFkYXB0ZXJcIjtcbi8vIGltcG9ydCAqIGFzIGF3c2NjIGZyb20gXCIuLi8uLi8uZ2VuL3Byb3ZpZGVycy9hd3NjY1wiO1xuLy8gaW1wb3J0ICogYXMgYXdzIGZyb20gXCJAY2RrdGYvcHJvdmlkZXItYXdzXCI7XG5cbmRlc2NyaWJlKFwiZWNzIGNsdXN0ZXJcIiwgKCkgPT4ge1xuICBpdChcInNob3VsZCBzeW50aGVzaXplXCIsICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBUZXN0aW5nLnN5bnRoU2NvcGUoKHNjb3BlKSA9PiB7XG4gICAgICBjb25zdCBhd3NBZGFwdGVyID0gbmV3IEF3c1RlcnJhZm9ybUFkYXB0ZXIoc2NvcGUsIFwiYWRhcHRlclwiKTtcblxuICAgICAgY29uc3QgdnBjID0gbmV3IGVjMi5WcGMoYXdzQWRhcHRlciwgXCJNeVZwY1wiLCB7XG4gICAgICAgIG1heEF6czogMywgLy8gRGVmYXVsdCBpcyBhbGwgQVpzIGluIHJlZ2lvblxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNsdXN0ZXIgPSBuZXcgZWNzLkNsdXN0ZXIoYXdzQWRhcHRlciwgXCJNeUNsdXN0ZXJcIiwge1xuICAgICAgICB2cGM6IHZwYyxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgYSBsb2FkLWJhbGFuY2VkIEZhcmdhdGUgc2VydmljZSBhbmQgbWFrZSBpdCBwdWJsaWNcbiAgICAgIG5ldyBlY3NfcGF0dGVybnMuQXBwbGljYXRpb25Mb2FkQmFsYW5jZWRGYXJnYXRlU2VydmljZShcbiAgICAgICAgYXdzQWRhcHRlcixcbiAgICAgICAgXCJNeUZhcmdhdGVTZXJ2aWNlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbHVzdGVyOiBjbHVzdGVyLCAvLyBSZXF1aXJlZFxuICAgICAgICAgIGNwdTogMjU2LCAvLyBEZWZhdWx0IGlzIDI1NlxuICAgICAgICAgIGRlc2lyZWRDb3VudDogMSwgLy8gRGVmYXVsdCBpcyAxXG4gICAgICAgICAgdGFza0ltYWdlT3B0aW9uczoge1xuICAgICAgICAgICAgaW1hZ2U6IGVjcy5Db250YWluZXJJbWFnZS5mcm9tUmVnaXN0cnkoXCJhbWF6b24vYW1hem9uLWVjcy1zYW1wbGVcIiksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtZW1vcnlMaW1pdE1pQjogNTEyLCAvLyBEZWZhdWx0IGlzIDUxMlxuICAgICAgICAgIHB1YmxpY0xvYWRCYWxhbmNlcjogdHJ1ZSwgLy8gRGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICAvLyBBc3BlY3RzIGFyZSBjdXJyZW50bHkgbm90IGludm9rZWQgdmlhIFRlc3Rpbmcuc3ludGggLyBUZXN0aW5nLnN5bnRoU2NvcGVcbiAgICAgIC8vIFRoaXMgbWFrZXMgc3VyZSB0aGUgQVdTIEFkYXB0ZXIgY29udmVydHMgYWxsIGNvbnN0cnVjdHMgdG8gY2RrdGZcbiAgICAgIEFzcGVjdHMub2Yoc2NvcGUpLmFsbC5mb3JFYWNoKChhc3BlY3QpID0+IGFzcGVjdC52aXNpdChzY29wZSkpO1xuICAgIH0pO1xuXG4gICAgZXhwZWN0KHJlcykudG9NYXRjaElubGluZVNuYXBzaG90KCk7XG4gIH0pO1xufSk7XG4iXX0=