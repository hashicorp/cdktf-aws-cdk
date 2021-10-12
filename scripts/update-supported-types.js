const path = require("path");
const fs = require("fs");
const {
  paginateListTypes,
  CloudFormationClient,
} = require("@aws-sdk/client-cloudformation");
const client = new CloudFormationClient();

const OUTPUT_FILE = path.join(__dirname, "..", "src/awscc/supportedTypes.ts");

async function main() {
  const paginator = paginateListTypes(
    { client, pageSize: 100 },
    {
      ProvisioningType: "FULLY_MUTABLE",
      Type: "RESOURCE",
      Visibility: "PUBLIC",
    }
  );

  const resources = [];
  for await (let output of paginator) {
    resources.push(...output.TypeSummaries);
  }

  console.log(
    `Found ${resources.length} resources that can be controlled via AWS CloudControl API`
  );

  const types = resources
    .map((summary) => summary.TypeName)
    .filter((t) => t.startsWith("AWS::"))
    .sort();

  const content = `// generated - this file is generated and can be updated by running the fetch:types script
export default new Set(${JSON.stringify(types, null, 2)});
`;

  fs.writeFileSync(OUTPUT_FILE, content);
}

main();
