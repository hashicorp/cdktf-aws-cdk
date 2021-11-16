import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { aws_dynamodb, CfnOutput } from "aws-cdk-lib";

import { AwsTerraformAdapter, AwsProvider, dynamodb } from "@cdktf/aws-cdk";
import { registerMapping } from "@cdktf/aws-cdk/lib/mapping";

registerMapping("AWS::DynamoDB::Table", {
  // For schema of `props` refer to https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html
  resource: (scope: Construct, id: string, props: any) => {
    // e.g. props = {
    //   KeySchema: [ { AttributeName: 'key', KeyType: 'HASH' } ],
    //   TableName: 'MyTestTable',
    //   AttributeDefinitions: [ { AttributeName: 'key', AttributeType: 'S' } ],
    //   ProvisionedThroughput: { ReadCapacityUnits: 5, WriteCapacityUnits: 5 },
    // }
    const mappedProps: dynamodb.DynamodbTableConfig = {
      name: props.TableName,
      attribute: props.AttributeDefinitions.map((att: any) => ({
        name: att.AttributeName,
        type: att.AttributeType,
      })),
      hashKey: props.KeySchema.find((ks: any) => ks.KeyType === "HASH")
        .AttributeName,
      readCapacity: props.ProvisionedThroughput.ReadCapacityUnits,
      writeCapacity: props.ProvisionedThroughput.WriteCapacityUnits,
    };
    // delete props we successfully mapped to mark them as handled
    delete props.TableName;
    delete props.KeySchema;
    delete props.AttributeDefinitions;
    delete props.ProvisionedThroughput;

    return new dynamodb.DynamodbTable(scope, id, mappedProps);
  },
  attributes: {
    Arn: (table: dynamodb.DynamodbTable) => table.arn,
  },
});

export class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", { region: "us-west-2" });

    const awsAdapter = new AwsTerraformAdapter(this, "adapter");

    const table = new aws_dynamodb.Table(awsAdapter, "table", {
      tableName: "MyTestTable",
      partitionKey: { name: "key", type: aws_dynamodb.AttributeType.STRING },
    });

    new CfnOutput(awsAdapter, 'arn', { value: table.tableArn });
  }
}

const app = new App();
new MyStack(app, "typescript-manual-mapping");

app.synth();
