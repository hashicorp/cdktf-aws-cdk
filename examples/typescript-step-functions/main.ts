import { Construct } from "constructs";
import { App, Fn, TerraformOutput, TerraformStack } from "cdktf";
import {
  Duration,
  aws_lambda,
  aws_stepfunctions,
  aws_stepfunctions_tasks,
} from "aws-cdk-lib";

import { AwsTerraformAdapter, AwsProvider } from "@cdktf/aws-cdk";

export class StepFunctionsStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", { region: "us-west-2" });

    const awsAdapter = new AwsTerraformAdapter(this, "adapter");

    const functionGenerateID = new aws_lambda.Function(
      awsAdapter,
      "GenerateID",
      {
        runtime: aws_lambda.Runtime.NODEJS_12_X,
        handler: "index.handler",
        code: aws_lambda.Code.fromInline(`
        const generate = () => Math.random().toString(36).substring(7);
    
        exports.handler = async () => ({"value": generate()});
      `),
      }
    );

    const functionReverseID = new aws_lambda.Function(awsAdapter, "ReverseID", {
      runtime: aws_lambda.Runtime.NODEJS_12_X,
      handler: "index.handler",
      code: aws_lambda.Code.fromInline(`
        const reverse = (str) => (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
    
        exports.handler = async (state) => ({"value": reverse(state.value)});
      `),
    });

    const definition = new aws_stepfunctions_tasks.LambdaInvoke(
      awsAdapter,
      "Generate ID",
      {
        lambdaFunction: functionGenerateID,
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
          lambdaFunction: functionReverseID,
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
