import { Testing } from "cdktf";
import "cdktf/lib/testing/adapters/jest";
import { MyStack } from "./main";

describe("typescript-cron-lambda", () => {
  it("should synthesize", () => {
    const stack = new MyStack(Testing.app(), "test");

    const synthResult = Testing.synth(stack);

    expect(synthResult).toMatchInlineSnapshot(`
      "{
        \\"output\\": {
          \\"adapter_arn_8967C6DC\\": {
            \\"value\\": \\"\${aws_dynamodb_table.adapter_table8235A42E_A4532862.arn}\\"
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
          \\"aws_dynamodb_table\\": {
            \\"adapter_table8235A42E_A4532862\\": {
              \\"attribute\\": [
                {
                  \\"name\\": \\"key\\",
                  \\"type\\": \\"S\\"
                }
              ],
              \\"hash_key\\": \\"key\\",
              \\"name\\": \\"MyTestTable\\",
              \\"read_capacity\\": 5,
              \\"write_capacity\\": 5
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
