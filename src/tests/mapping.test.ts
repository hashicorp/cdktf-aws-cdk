import { hasCustomMapping } from "../mapping";
import supportedAwsccResourceTypes from "../awscc/supportedTypes";

describe("mapping", () => {
  it("does not shadow awscc supported types", (done) => {
    const shadowedTypes = [...supportedAwsccResourceTypes].filter(
      hasCustomMapping
    );

    if (shadowedTypes.length > 0) {
      done(
        `AWS CC API supports types for which have custom mappings in place which will shadow the AWS CC API implementation: ${shadowedTypes.join(
          ", "
        )}`
      );
    }
    done();
  });
});
