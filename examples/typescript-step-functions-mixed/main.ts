import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import {
  Duration,
  aws_stepfunctions,
  aws_stepfunctions_tasks,
  aws_lambda,
} from "aws-cdk-lib";
import * as aws_cdk from "aws-cdk-lib";
import * as path from "path";

import { AwsTerraformAdapter, AwsProvider } from "@cdktf/aws-cdk";
import { NodejsFunction } from "./cdktf-plus/nodejs-function";

export class StepFunctionsStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", { region: "us-west-2" });

    const awsAdapter = new AwsTerraformAdapter(this, "adapter");

    const functionGenerateID = new NodejsFunction(this, "generate-id", {
      path: path.join(__dirname, "fn-generate-id.ts"),
    });

    const functionReverseID = new NodejsFunction(this, "reverse-id", {
      path: path.join(__dirname, "fn-reverse-id.ts"),
    });

    const definition = new aws_stepfunctions_tasks.LambdaInvoke(
      awsAdapter,
      "Generate ID",
      {
        lambdaFunction: aws_lambda.Function.fromFunctionArn(
          awsAdapter,
          "generate-id",
          aws_cdk.Lazy.string({
            produce: () => functionGenerateID.fn.arn,
          })
        ),
        outputPath: "$.Payload",
      }
    )
      .next(
        new aws_stepfunctions.Wait(awsAdapter, "Wait 1 Second", {
          time: aws_stepfunctions.WaitTime.duration(Duration.seconds(1)),
        })
      )
      .next(
        new aws_stepfunctions_tasks.LambdaInvoke(awsAdapter, "Reverse ID", {
          lambdaFunction: aws_lambda.Function.fromFunctionArn(
            awsAdapter,
            "reverse-id",
            aws_cdk.Lazy.string({
              produce: () => functionReverseID.fn.arn,
            })
          ),
          outputPath: "$.Payload",
        })
      );

    new aws_stepfunctions.StateMachine(awsAdapter, "StateMachine", {
      definition,
      timeout: Duration.minutes(5),
    });
  }
}

const app = new App();
new StepFunctionsStack(app, "typescript-step-functions");

app.synth();
