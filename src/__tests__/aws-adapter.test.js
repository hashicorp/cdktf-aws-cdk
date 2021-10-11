"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_adapter_1 = require("../aws-adapter");
const cdktf_1 = require("cdktf");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const mapping_1 = require("../mapping");
const camel_case_1 = require("camel-case");
const snake_case_1 = require("snake-case");
describe("AwsTerraformAdapter", () => {
    let adapter;
    let stack;
    beforeEach(() => {
        const app = cdktf_1.Testing.app();
        stack = new cdktf_1.TerraformStack(app, "test");
        adapter = new aws_adapter_1.AwsTerraformAdapter(stack, "adapter");
    });
    describe("resolveIntrinsic", () => {
        it("should resolve Fn::GetAtt", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: { "Fn::GetAtt": ["another", "List"] },
                        },
                    },
                    another: {
                        Type: "Test::Resource",
                        Properties: {},
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
        "{
          \\"resource\\": {
            \\"test\\": {
              \\"adapter_another_C86ABFE2\\": {},
              \\"adapter_subject_24E89D84\\": {
                \\"value\\": \\"\${test.adapter_another_C86ABFE2.list}\\"
              }
            }
          }
        }"
      `);
        });
        it("should resolve Fn::Join", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: {
                                "Fn::Join": [
                                    ",",
                                    ["one", "two", { "Fn::GetAtt": ["another", "String"] }],
                                ],
                            },
                        },
                    },
                    another: {
                        Type: "Test::Resource",
                        Properties: {},
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${join(\\\\\\",\\\\\\", [\\\\\\"one\\\\\\", \\\\\\"two\\\\\\", test.adapter_another_C86ABFE2.string])}\\"
      }
    }
  }
}"
`);
        });
        it("should resolve Fn::Select", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: {
                                "Fn::Select": [1, { "Fn::GetAtt": ["another", "List"] }],
                            },
                        },
                    },
                    another: {
                        Type: "Test::Resource",
                        Properties: {},
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${element(test.adapter_another_C86ABFE2.list, 1)}\\"
      }
    }
  }
}"
`);
        });
        it("should resolve Fn::GetAZs", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: {
                                "Fn::GetAZs": [],
                            },
                            Value2: {
                                "Fn::GetAZs": ["eu-central-1"],
                            },
                        },
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"data\\": {
    \\"aws_availability_zones\\": {
      \\"adapter_aws_azs_default_region_9CD033CD\\": {},
      \\"adapter_aws_azs_eu_central_1_B40FEB09\\": {
        \\"provider\\": \\"aws.eu_central_1\\"
      }
    }
  },
  \\"provider\\": {
    \\"aws\\": [
      {
        \\"alias\\": \\"eu_central_1\\",
        \\"region\\": \\"eu-central-1\\"
      }
    ]
  },
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${data.aws_availability_zones.adapter_aws_azs_default_region_9CD033CD.names}\\",
        \\"value2\\": \\"\${data.aws_availability_zones.adapter_aws_azs_eu_central_1_B40FEB09.names}\\"
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
        it("should resolve Fn::Base64", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: {
                                "Fn::Base64": [{ "Fn::GetAtt": ["another", "String"] }],
                            },
                        },
                    },
                    another: {
                        Type: "Test::Resource",
                        Properties: {},
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${base64encode(test.adapter_another_C86ABFE2.string)}\\"
      }
    }
  }
}"
`);
        });
        it("should resolve Fn::Cidr", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: {
                                "Fn::Cidr": ["192.168.0.0/24", "6", "5"],
                            },
                            Value2: {
                                "Fn::Cidr": ["192.168.0.0/24", "1", "8"],
                            },
                        },
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${cidrsubnets(\\\\\\"192.168.0.0/24\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\", \\\\\\"5\\\\\\")}\\",
        \\"value2\\": \\"\${cidrsubnets(\\\\\\"192.168.0.0/24\\\\\\", \\\\\\"8\\\\\\")}\\"
      }
    }
  }
}"
`);
        });
        it("should resolve Fn::FindInMap", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: {
                                "Fn::FindInMap": [
                                    { "Fn::GetAtt": ["another", "Map"] },
                                    "keyA",
                                    { "Fn::GetAtt": ["another", "String"] },
                                ],
                            },
                        },
                    },
                    another: {
                        Type: "Test::Resource",
                        Properties: {},
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${test.adapter_another_C86ABFE2.map[\\\\\\"keyA\\\\\\"][test.adapter_another_C86ABFE2.string]}\\"
      }
    }
  }
}"
`);
        });
        it("should resolve Fn::Sub", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: {
                                "Fn::Sub": [
                                    "this is the ${TEMPLATE} string. This will not be ${!REPLACED} but end up without the exclamation mark",
                                    { TEMPLATE: { "Fn::GetAtt": ["another", "String"] } },
                                ],
                            },
                        },
                    },
                    another: {
                        Type: "Test::Resource",
                        Properties: {},
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${replace(replace(\\\\\\"this is the $\${TEMPLATE} string. This will not be $\${!REPLACED} but end up without the exclamation mark\\\\\\", \\\\\\"$\${TEMPLATE}\\\\\\", test.adapter_another_C86ABFE2.string), \\\\\\"/\\\\\\\\\\\\\\\\$\\\\\\\\\\\\\\\\{!(\\\\\\\\\\\\\\\\w+)\\\\\\\\\\\\\\\\}/\\\\\\", \\\\\\"$\${$1}\\\\\\")}\\"
      }
    }
  }
}"
`);
        });
        it("should resolve Fn::Split", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {
                    subject: {
                        Type: "Test::Resource",
                        Properties: {
                            Value: {
                                "Fn::Split": [",", { "Fn::GetAtt": ["another", "String"] }],
                            },
                        },
                    },
                    another: {
                        Type: "Test::Resource",
                        Properties: {},
                    },
                },
            });
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"resource\\": {
    \\"test\\": {
      \\"adapter_another_C86ABFE2\\": {},
      \\"adapter_subject_24E89D84\\": {
        \\"value\\": \\"\${split(\\\\\\",\\\\\\", test.adapter_another_C86ABFE2.string)}\\"
      }
    }
  }
}"
`);
        });
    });
    describe("Conditions", () => {
        it("should create locals for conditions", () => {
            new StaticCfnConstruct(adapter, "cfn", {
                Resources: {},
                Conditions: {
                    IsProd: { "Fn::Equals": ["A", "A"] },
                    IsDev: { "Fn::Not": ["IsProd"] },
                    And: { "Fn::And": [{ Condition: "IsProd" }, true, true] },
                    Or: { "Fn::Or": [{ Condition: "IsProd" }, true, true] },
                    If: { "Fn::If": ["IsProd", 1, 0] },
                },
            });
            // TODO: check how (if at all) literal true and false can be passed
            // TODO: check why "false" ends up as undefined
            expect(synthWithAspects(stack)).toMatchInlineSnapshot(`
"{
  \\"locals\\": {
    \\"adapter_condition_And_696B6B21\\": \\"\${((local.adapter_condition_IsProd_8FB293B1 && true) && true)}\\",
    \\"adapter_condition_If_4412FEF9\\": \\"\${local.adapter_condition_IsProd_8FB293B1 ? 1 : 0}\\",
    \\"adapter_condition_IsDev_FDA8D7BD\\": \\"\${!local.adapter_condition_IsProd_8FB293B1}\\",
    \\"adapter_condition_IsProd_8FB293B1\\": \\"\${(\\\\\\"A\\\\\\" == \\\\\\"A\\\\\\")}\\",
    \\"adapter_condition_Or_83D17798\\": \\"\${((local.adapter_condition_IsProd_8FB293B1 || true) || true)}\\"
  }
}"
`);
        });
    });
});
/**
 * Currently `Testing.synth` does not invoke Aspects, so we make sure this happens
 * this is not a correct (read complete) invocation of Aspects, but it invokes
 * the convertion of the AwsTerraformAdapter
 */
function synthWithAspects(stack) {
    cdktf_1.Aspects.of(stack).all.forEach((aspect) => aspect.visit(stack));
    return cdktf_1.Testing.synth(stack);
}
mapping_1.registerMapping("Test::Resource", {
    resource: (scope, id, props) => {
        const converted = {};
        // "PascalCase" to "camelCase" for all keys
        Object.keys(props).forEach((key) => {
            const cdktfKey = camel_case_1.camelCase(key);
            converted[cdktfKey] = props[key];
            delete props[key];
        });
        return new TestResource(scope, id, converted);
    },
    attributes: {
        Ref: (r) => r.getStringAttribute("ref"),
        Arn: (r) => r.getStringAttribute("arn"),
        List: (r) => r.getListAttribute("list"),
        Bool: (r) => r.getBooleanAttribute("bool"),
        String: (r) => r.getStringAttribute("string"),
        Number: (r) => r.getNumberAttribute("number"),
        Map: (r) => r.getStringAttribute("map"),
    },
});
/**
 * resource for testing purposes that will just convert everything to snake case
 */
class TestResource extends cdktf_1.TerraformResource {
    constructor(scope, id, config) {
        super(scope, id, { terraformResourceType: "test" });
        this.config = config;
    }
    synthesizeAttributes() {
        const converted = {};
        Object.keys(this.config).forEach((key) => {
            const cdktfKey = snake_case_1.snakeCase(key);
            converted[cdktfKey] = this.config[key];
        });
        return converted;
    }
}
class StaticCfnConstruct extends aws_cdk_lib_1.CfnElement {
    constructor(scope, id, cfn) {
        super(scope, id);
        this.cfn = cfn;
    }
    _toCloudFormation() {
        return this.cfn;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLWFkYXB0ZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF3cy1hZGFwdGVyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnREFBcUQ7QUFDckQsaUNBQTRFO0FBQzVFLDZDQUF5QztBQUd6Qyx3Q0FBNkM7QUFDN0MsMkNBQXVDO0FBQ3ZDLDJDQUF1QztBQUV2QyxRQUFRLENBQUMscUJBQXFCLEVBQUUsR0FBRyxFQUFFO0lBQ25DLElBQUksT0FBNEIsQ0FBQztJQUNqQyxJQUFJLEtBQXFCLENBQUM7SUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLE1BQU0sR0FBRyxHQUFHLGVBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMxQixLQUFLLEdBQUcsSUFBSSxzQkFBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4QyxPQUFPLEdBQUcsSUFBSSxpQ0FBbUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO1FBQ2hDLEVBQUUsQ0FBQywyQkFBMkIsRUFBRSxHQUFHLEVBQUU7WUFDbkMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFO2dCQUNyQyxTQUFTLEVBQUU7b0JBQ1QsT0FBTyxFQUFFO3dCQUNQLElBQUksRUFBRSxnQkFBZ0I7d0JBQ3RCLFVBQVUsRUFBRTs0QkFDVixLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEVBQUU7eUJBQzdDO3FCQUNGO29CQUNELE9BQU8sRUFBRTt3QkFDUCxJQUFJLEVBQUUsZ0JBQWdCO3dCQUN0QixVQUFVLEVBQUUsRUFBRTtxQkFDZjtpQkFDRjthQUNGLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDOzs7Ozs7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O1FBRlQsUUFBRyxHQUFILEdBQUcsQ0FBd0I7SUFHckMsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd3NUZXJyYWZvcm1BZGFwdGVyIH0gZnJvbSBcIi4uL2F3cy1hZGFwdGVyXCI7XG5pbXBvcnQgeyBBc3BlY3RzLCBUZXJyYWZvcm1SZXNvdXJjZSwgVGVycmFmb3JtU3RhY2ssIFRlc3RpbmcgfSBmcm9tIFwiY2RrdGZcIjtcbmltcG9ydCB7IENmbkVsZW1lbnQgfSBmcm9tIFwiYXdzLWNkay1saWJcIjtcbmltcG9ydCB7IENsb3VkRm9ybWF0aW9uVGVtcGxhdGUgfSBmcm9tIFwiLi4vY2ZuXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgcmVnaXN0ZXJNYXBwaW5nIH0gZnJvbSBcIi4uL21hcHBpbmdcIjtcbmltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gXCJjYW1lbC1jYXNlXCI7XG5pbXBvcnQgeyBzbmFrZUNhc2UgfSBmcm9tIFwic25ha2UtY2FzZVwiO1xuXG5kZXNjcmliZShcIkF3c1RlcnJhZm9ybUFkYXB0ZXJcIiwgKCkgPT4ge1xuICBsZXQgYWRhcHRlcjogQXdzVGVycmFmb3JtQWRhcHRlcjtcbiAgbGV0IHN0YWNrOiBUZXJyYWZvcm1TdGFjaztcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gVGVzdGluZy5hcHAoKTtcbiAgICBzdGFjayA9IG5ldyBUZXJyYWZvcm1TdGFjayhhcHAsIFwidGVzdFwiKTtcbiAgICBhZGFwdGVyID0gbmV3IEF3c1RlcnJhZm9ybUFkYXB0ZXIoc3RhY2ssIFwiYWRhcHRlclwiKTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoXCJyZXNvbHZlSW50cmluc2ljXCIsICgpID0+IHtcbiAgICBpdChcInNob3VsZCByZXNvbHZlIEZuOjpHZXRBdHRcIiwgKCkgPT4ge1xuICAgICAgbmV3IFN0YXRpY0NmbkNvbnN0cnVjdChhZGFwdGVyLCBcImNmblwiLCB7XG4gICAgICAgIFJlc291cmNlczoge1xuICAgICAgICAgIHN1YmplY3Q6IHtcbiAgICAgICAgICAgIFR5cGU6IFwiVGVzdDo6UmVzb3VyY2VcIixcbiAgICAgICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgVmFsdWU6IHsgXCJGbjo6R2V0QXR0XCI6IFtcImFub3RoZXJcIiwgXCJMaXN0XCJdIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5vdGhlcjoge1xuICAgICAgICAgICAgVHlwZTogXCJUZXN0OjpSZXNvdXJjZVwiLFxuICAgICAgICAgICAgUHJvcGVydGllczoge30sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBleHBlY3Qoc3ludGhXaXRoQXNwZWN0cyhzdGFjaykpLnRvTWF0Y2hJbmxpbmVTbmFwc2hvdChgXG4gICAgICAgIFwie1xuICAgICAgICAgIFxcXFxcInJlc291cmNlXFxcXFwiOiB7XG4gICAgICAgICAgICBcXFxcXCJ0ZXN0XFxcXFwiOiB7XG4gICAgICAgICAgICAgIFxcXFxcImFkYXB0ZXJfYW5vdGhlcl9DODZBQkZFMlxcXFxcIjoge30sXG4gICAgICAgICAgICAgIFxcXFxcImFkYXB0ZXJfc3ViamVjdF8yNEU4OUQ4NFxcXFxcIjoge1xuICAgICAgICAgICAgICAgIFxcXFxcInZhbHVlXFxcXFwiOiBcXFxcXCJcXCR7dGVzdC5hZGFwdGVyX2Fub3RoZXJfQzg2QUJGRTIubGlzdH1cXFxcXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVwiXG4gICAgICBgKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIHJlc29sdmUgRm46OkpvaW5cIiwgKCkgPT4ge1xuICAgICAgbmV3IFN0YXRpY0NmbkNvbnN0cnVjdChhZGFwdGVyLCBcImNmblwiLCB7XG4gICAgICAgIFJlc291cmNlczoge1xuICAgICAgICAgIHN1YmplY3Q6IHtcbiAgICAgICAgICAgIFR5cGU6IFwiVGVzdDo6UmVzb3VyY2VcIixcbiAgICAgICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgVmFsdWU6IHtcbiAgICAgICAgICAgICAgICBcIkZuOjpKb2luXCI6IFtcbiAgICAgICAgICAgICAgICAgIFwiLFwiLFxuICAgICAgICAgICAgICAgICAgW1wib25lXCIsIFwidHdvXCIsIHsgXCJGbjo6R2V0QXR0XCI6IFtcImFub3RoZXJcIiwgXCJTdHJpbmdcIl0gfV0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm90aGVyOiB7XG4gICAgICAgICAgICBUeXBlOiBcIlRlc3Q6OlJlc291cmNlXCIsXG4gICAgICAgICAgICBQcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGV4cGVjdChzeW50aFdpdGhBc3BlY3RzKHN0YWNrKSkudG9NYXRjaElubGluZVNuYXBzaG90KGBcblwie1xuICBcXFxcXCJyZXNvdXJjZVxcXFxcIjoge1xuICAgIFxcXFxcInRlc3RcXFxcXCI6IHtcbiAgICAgIFxcXFxcImFkYXB0ZXJfYW5vdGhlcl9DODZBQkZFMlxcXFxcIjoge30sXG4gICAgICBcXFxcXCJhZGFwdGVyX3N1YmplY3RfMjRFODlEODRcXFxcXCI6IHtcbiAgICAgICAgXFxcXFwidmFsdWVcXFxcXCI6IFxcXFxcIlxcJHtqb2luKFxcXFxcXFxcXFxcXFwiLFxcXFxcXFxcXFxcXFwiLCBbXFxcXFxcXFxcXFxcXCJvbmVcXFxcXFxcXFxcXFxcIiwgXFxcXFxcXFxcXFxcXCJ0d29cXFxcXFxcXFxcXFxcIiwgdGVzdC5hZGFwdGVyX2Fub3RoZXJfQzg2QUJGRTIuc3RyaW5nXSl9XFxcXFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XCJcbmApO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgcmVzb2x2ZSBGbjo6U2VsZWN0XCIsICgpID0+IHtcbiAgICAgIG5ldyBTdGF0aWNDZm5Db25zdHJ1Y3QoYWRhcHRlciwgXCJjZm5cIiwge1xuICAgICAgICBSZXNvdXJjZXM6IHtcbiAgICAgICAgICBzdWJqZWN0OiB7XG4gICAgICAgICAgICBUeXBlOiBcIlRlc3Q6OlJlc291cmNlXCIsXG4gICAgICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIFZhbHVlOiB7XG4gICAgICAgICAgICAgICAgXCJGbjo6U2VsZWN0XCI6IFsxLCB7IFwiRm46OkdldEF0dFwiOiBbXCJhbm90aGVyXCIsIFwiTGlzdFwiXSB9XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm90aGVyOiB7XG4gICAgICAgICAgICBUeXBlOiBcIlRlc3Q6OlJlc291cmNlXCIsXG4gICAgICAgICAgICBQcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGV4cGVjdChzeW50aFdpdGhBc3BlY3RzKHN0YWNrKSkudG9NYXRjaElubGluZVNuYXBzaG90KGBcblwie1xuICBcXFxcXCJyZXNvdXJjZVxcXFxcIjoge1xuICAgIFxcXFxcInRlc3RcXFxcXCI6IHtcbiAgICAgIFxcXFxcImFkYXB0ZXJfYW5vdGhlcl9DODZBQkZFMlxcXFxcIjoge30sXG4gICAgICBcXFxcXCJhZGFwdGVyX3N1YmplY3RfMjRFODlEODRcXFxcXCI6IHtcbiAgICAgICAgXFxcXFwidmFsdWVcXFxcXCI6IFxcXFxcIlxcJHtlbGVtZW50KHRlc3QuYWRhcHRlcl9hbm90aGVyX0M4NkFCRkUyLmxpc3QsIDEpfVxcXFxcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufVwiXG5gKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIHJlc29sdmUgRm46OkdldEFac1wiLCAoKSA9PiB7XG4gICAgICBuZXcgU3RhdGljQ2ZuQ29uc3RydWN0KGFkYXB0ZXIsIFwiY2ZuXCIsIHtcbiAgICAgICAgUmVzb3VyY2VzOiB7XG4gICAgICAgICAgc3ViamVjdDoge1xuICAgICAgICAgICAgVHlwZTogXCJUZXN0OjpSZXNvdXJjZVwiLFxuICAgICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgICBWYWx1ZToge1xuICAgICAgICAgICAgICAgIFwiRm46OkdldEFac1wiOiBbXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgVmFsdWUyOiB7XG4gICAgICAgICAgICAgICAgXCJGbjo6R2V0QVpzXCI6IFtcImV1LWNlbnRyYWwtMVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgZXhwZWN0KHN5bnRoV2l0aEFzcGVjdHMoc3RhY2spKS50b01hdGNoSW5saW5lU25hcHNob3QoYFxuXCJ7XG4gIFxcXFxcImRhdGFcXFxcXCI6IHtcbiAgICBcXFxcXCJhd3NfYXZhaWxhYmlsaXR5X3pvbmVzXFxcXFwiOiB7XG4gICAgICBcXFxcXCJhZGFwdGVyX2F3c19henNfZGVmYXVsdF9yZWdpb25fOUNEMDMzQ0RcXFxcXCI6IHt9LFxuICAgICAgXFxcXFwiYWRhcHRlcl9hd3NfYXpzX2V1X2NlbnRyYWxfMV9CNDBGRUIwOVxcXFxcIjoge1xuICAgICAgICBcXFxcXCJwcm92aWRlclxcXFxcIjogXFxcXFwiYXdzLmV1X2NlbnRyYWxfMVxcXFxcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXFxcXFwicHJvdmlkZXJcXFxcXCI6IHtcbiAgICBcXFxcXCJhd3NcXFxcXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXFxcXFwiYWxpYXNcXFxcXCI6IFxcXFxcImV1X2NlbnRyYWxfMVxcXFxcIixcbiAgICAgICAgXFxcXFwicmVnaW9uXFxcXFwiOiBcXFxcXCJldS1jZW50cmFsLTFcXFxcXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFxcXFxcInJlc291cmNlXFxcXFwiOiB7XG4gICAgXFxcXFwidGVzdFxcXFxcIjoge1xuICAgICAgXFxcXFwiYWRhcHRlcl9zdWJqZWN0XzI0RTg5RDg0XFxcXFwiOiB7XG4gICAgICAgIFxcXFxcInZhbHVlXFxcXFwiOiBcXFxcXCJcXCR7ZGF0YS5hd3NfYXZhaWxhYmlsaXR5X3pvbmVzLmFkYXB0ZXJfYXdzX2F6c19kZWZhdWx0X3JlZ2lvbl85Q0QwMzNDRC5uYW1lc31cXFxcXCIsXG4gICAgICAgIFxcXFxcInZhbHVlMlxcXFxcIjogXFxcXFwiXFwke2RhdGEuYXdzX2F2YWlsYWJpbGl0eV96b25lcy5hZGFwdGVyX2F3c19henNfZXVfY2VudHJhbF8xX0I0MEZFQjA5Lm5hbWVzfVxcXFxcIlxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXFxcXFwidGVycmFmb3JtXFxcXFwiOiB7XG4gICAgXFxcXFwicmVxdWlyZWRfcHJvdmlkZXJzXFxcXFwiOiB7XG4gICAgICBcXFxcXCJhd3NcXFxcXCI6IHtcbiAgICAgICAgXFxcXFwic291cmNlXFxcXFwiOiBcXFxcXCJhd3NcXFxcXCIsXG4gICAgICAgIFxcXFxcInZlcnNpb25cXFxcXCI6IFxcXFxcIn4+IDMuMFxcXFxcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufVwiXG5gKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIHJlc29sdmUgRm46OkJhc2U2NFwiLCAoKSA9PiB7XG4gICAgICBuZXcgU3RhdGljQ2ZuQ29uc3RydWN0KGFkYXB0ZXIsIFwiY2ZuXCIsIHtcbiAgICAgICAgUmVzb3VyY2VzOiB7XG4gICAgICAgICAgc3ViamVjdDoge1xuICAgICAgICAgICAgVHlwZTogXCJUZXN0OjpSZXNvdXJjZVwiLFxuICAgICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgICBWYWx1ZToge1xuICAgICAgICAgICAgICAgIFwiRm46OkJhc2U2NFwiOiBbeyBcIkZuOjpHZXRBdHRcIjogW1wiYW5vdGhlclwiLCBcIlN0cmluZ1wiXSB9XSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm90aGVyOiB7XG4gICAgICAgICAgICBUeXBlOiBcIlRlc3Q6OlJlc291cmNlXCIsXG4gICAgICAgICAgICBQcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBleHBlY3Qoc3ludGhXaXRoQXNwZWN0cyhzdGFjaykpLnRvTWF0Y2hJbmxpbmVTbmFwc2hvdChgXG5cIntcbiAgXFxcXFwicmVzb3VyY2VcXFxcXCI6IHtcbiAgICBcXFxcXCJ0ZXN0XFxcXFwiOiB7XG4gICAgICBcXFxcXCJhZGFwdGVyX2Fub3RoZXJfQzg2QUJGRTJcXFxcXCI6IHt9LFxuICAgICAgXFxcXFwiYWRhcHRlcl9zdWJqZWN0XzI0RTg5RDg0XFxcXFwiOiB7XG4gICAgICAgIFxcXFxcInZhbHVlXFxcXFwiOiBcXFxcXCJcXCR7YmFzZTY0ZW5jb2RlKHRlc3QuYWRhcHRlcl9hbm90aGVyX0M4NkFCRkUyLnN0cmluZyl9XFxcXFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XCJcbmApO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgcmVzb2x2ZSBGbjo6Q2lkclwiLCAoKSA9PiB7XG4gICAgICBuZXcgU3RhdGljQ2ZuQ29uc3RydWN0KGFkYXB0ZXIsIFwiY2ZuXCIsIHtcbiAgICAgICAgUmVzb3VyY2VzOiB7XG4gICAgICAgICAgc3ViamVjdDoge1xuICAgICAgICAgICAgVHlwZTogXCJUZXN0OjpSZXNvdXJjZVwiLFxuICAgICAgICAgICAgUHJvcGVydGllczoge1xuICAgICAgICAgICAgICBWYWx1ZToge1xuICAgICAgICAgICAgICAgIFwiRm46OkNpZHJcIjogW1wiMTkyLjE2OC4wLjAvMjRcIiwgXCI2XCIsIFwiNVwiXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgVmFsdWUyOiB7XG4gICAgICAgICAgICAgICAgXCJGbjo6Q2lkclwiOiBbXCIxOTIuMTY4LjAuMC8yNFwiLCBcIjFcIiwgXCI4XCJdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBleHBlY3Qoc3ludGhXaXRoQXNwZWN0cyhzdGFjaykpLnRvTWF0Y2hJbmxpbmVTbmFwc2hvdChgXG5cIntcbiAgXFxcXFwicmVzb3VyY2VcXFxcXCI6IHtcbiAgICBcXFxcXCJ0ZXN0XFxcXFwiOiB7XG4gICAgICBcXFxcXCJhZGFwdGVyX3N1YmplY3RfMjRFODlEODRcXFxcXCI6IHtcbiAgICAgICAgXFxcXFwidmFsdWVcXFxcXCI6IFxcXFxcIlxcJHtjaWRyc3VibmV0cyhcXFxcXFxcXFxcXFxcIjE5Mi4xNjguMC4wLzI0XFxcXFxcXFxcXFxcXCIsIFxcXFxcXFxcXFxcXFwiNVxcXFxcXFxcXFxcXFwiLCBcXFxcXFxcXFxcXFxcIjVcXFxcXFxcXFxcXFxcIiwgXFxcXFxcXFxcXFxcXCI1XFxcXFxcXFxcXFxcXCIsIFxcXFxcXFxcXFxcXFwiNVxcXFxcXFxcXFxcXFwiLCBcXFxcXFxcXFxcXFxcIjVcXFxcXFxcXFxcXFxcIiwgXFxcXFxcXFxcXFxcXCI1XFxcXFxcXFxcXFxcXCIpfVxcXFxcIixcbiAgICAgICAgXFxcXFwidmFsdWUyXFxcXFwiOiBcXFxcXCJcXCR7Y2lkcnN1Ym5ldHMoXFxcXFxcXFxcXFxcXCIxOTIuMTY4LjAuMC8yNFxcXFxcXFxcXFxcXFwiLCBcXFxcXFxcXFxcXFxcIjhcXFxcXFxcXFxcXFxcIil9XFxcXFwiXG4gICAgICB9XG4gICAgfVxuICB9XG59XCJcbmApO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgcmVzb2x2ZSBGbjo6RmluZEluTWFwXCIsICgpID0+IHtcbiAgICAgIG5ldyBTdGF0aWNDZm5Db25zdHJ1Y3QoYWRhcHRlciwgXCJjZm5cIiwge1xuICAgICAgICBSZXNvdXJjZXM6IHtcbiAgICAgICAgICBzdWJqZWN0OiB7XG4gICAgICAgICAgICBUeXBlOiBcIlRlc3Q6OlJlc291cmNlXCIsXG4gICAgICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIFZhbHVlOiB7XG4gICAgICAgICAgICAgICAgXCJGbjo6RmluZEluTWFwXCI6IFtcbiAgICAgICAgICAgICAgICAgIHsgXCJGbjo6R2V0QXR0XCI6IFtcImFub3RoZXJcIiwgXCJNYXBcIl0gfSxcbiAgICAgICAgICAgICAgICAgIFwia2V5QVwiLFxuICAgICAgICAgICAgICAgICAgeyBcIkZuOjpHZXRBdHRcIjogW1wiYW5vdGhlclwiLCBcIlN0cmluZ1wiXSB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYW5vdGhlcjoge1xuICAgICAgICAgICAgVHlwZTogXCJUZXN0OjpSZXNvdXJjZVwiLFxuICAgICAgICAgICAgUHJvcGVydGllczoge30sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgZXhwZWN0KHN5bnRoV2l0aEFzcGVjdHMoc3RhY2spKS50b01hdGNoSW5saW5lU25hcHNob3QoYFxuXCJ7XG4gIFxcXFxcInJlc291cmNlXFxcXFwiOiB7XG4gICAgXFxcXFwidGVzdFxcXFxcIjoge1xuICAgICAgXFxcXFwiYWRhcHRlcl9hbm90aGVyX0M4NkFCRkUyXFxcXFwiOiB7fSxcbiAgICAgIFxcXFxcImFkYXB0ZXJfc3ViamVjdF8yNEU4OUQ4NFxcXFxcIjoge1xuICAgICAgICBcXFxcXCJ2YWx1ZVxcXFxcIjogXFxcXFwiXFwke3Rlc3QuYWRhcHRlcl9hbm90aGVyX0M4NkFCRkUyLm1hcFtcXFxcXFxcXFxcXFxcImtleUFcXFxcXFxcXFxcXFxcIl1bdGVzdC5hZGFwdGVyX2Fub3RoZXJfQzg2QUJGRTIuc3RyaW5nXX1cXFxcXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cIlxuYCk7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCByZXNvbHZlIEZuOjpTdWJcIiwgKCkgPT4ge1xuICAgICAgbmV3IFN0YXRpY0NmbkNvbnN0cnVjdChhZGFwdGVyLCBcImNmblwiLCB7XG4gICAgICAgIFJlc291cmNlczoge1xuICAgICAgICAgIHN1YmplY3Q6IHtcbiAgICAgICAgICAgIFR5cGU6IFwiVGVzdDo6UmVzb3VyY2VcIixcbiAgICAgICAgICAgIFByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgVmFsdWU6IHtcbiAgICAgICAgICAgICAgICBcIkZuOjpTdWJcIjogW1xuICAgICAgICAgICAgICAgICAgXCJ0aGlzIGlzIHRoZSAke1RFTVBMQVRFfSBzdHJpbmcuIFRoaXMgd2lsbCBub3QgYmUgJHshUkVQTEFDRUR9IGJ1dCBlbmQgdXAgd2l0aG91dCB0aGUgZXhjbGFtYXRpb24gbWFya1wiLFxuICAgICAgICAgICAgICAgICAgeyBURU1QTEFURTogeyBcIkZuOjpHZXRBdHRcIjogW1wiYW5vdGhlclwiLCBcIlN0cmluZ1wiXSB9IH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbm90aGVyOiB7XG4gICAgICAgICAgICBUeXBlOiBcIlRlc3Q6OlJlc291cmNlXCIsXG4gICAgICAgICAgICBQcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBleHBlY3Qoc3ludGhXaXRoQXNwZWN0cyhzdGFjaykpLnRvTWF0Y2hJbmxpbmVTbmFwc2hvdChgXG5cIntcbiAgXFxcXFwicmVzb3VyY2VcXFxcXCI6IHtcbiAgICBcXFxcXCJ0ZXN0XFxcXFwiOiB7XG4gICAgICBcXFxcXCJhZGFwdGVyX2Fub3RoZXJfQzg2QUJGRTJcXFxcXCI6IHt9LFxuICAgICAgXFxcXFwiYWRhcHRlcl9zdWJqZWN0XzI0RTg5RDg0XFxcXFwiOiB7XG4gICAgICAgIFxcXFxcInZhbHVlXFxcXFwiOiBcXFxcXCJcXCR7cmVwbGFjZShyZXBsYWNlKFxcXFxcXFxcXFxcXFwidGhpcyBpcyB0aGUgJFxcJHtURU1QTEFURX0gc3RyaW5nLiBUaGlzIHdpbGwgbm90IGJlICRcXCR7IVJFUExBQ0VEfSBidXQgZW5kIHVwIHdpdGhvdXQgdGhlIGV4Y2xhbWF0aW9uIG1hcmtcXFxcXFxcXFxcXFxcIiwgXFxcXFxcXFxcXFxcXCIkXFwke1RFTVBMQVRFfVxcXFxcXFxcXFxcXFwiLCB0ZXN0LmFkYXB0ZXJfYW5vdGhlcl9DODZBQkZFMi5zdHJpbmcpLCBcXFxcXFxcXFxcXFxcIi9cXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXCRcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHshKFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcdyspXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx9L1xcXFxcXFxcXFxcXFwiLCBcXFxcXFxcXFxcXFxcIiRcXCR7JDF9XFxcXFxcXFxcXFxcXCIpfVxcXFxcIlxuICAgICAgfVxuICAgIH1cbiAgfVxufVwiXG5gKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIHJlc29sdmUgRm46OlNwbGl0XCIsICgpID0+IHtcbiAgICAgIG5ldyBTdGF0aWNDZm5Db25zdHJ1Y3QoYWRhcHRlciwgXCJjZm5cIiwge1xuICAgICAgICBSZXNvdXJjZXM6IHtcbiAgICAgICAgICBzdWJqZWN0OiB7XG4gICAgICAgICAgICBUeXBlOiBcIlRlc3Q6OlJlc291cmNlXCIsXG4gICAgICAgICAgICBQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIFZhbHVlOiB7XG4gICAgICAgICAgICAgICAgXCJGbjo6U3BsaXRcIjogW1wiLFwiLCB7IFwiRm46OkdldEF0dFwiOiBbXCJhbm90aGVyXCIsIFwiU3RyaW5nXCJdIH1dLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGFub3RoZXI6IHtcbiAgICAgICAgICAgIFR5cGU6IFwiVGVzdDo6UmVzb3VyY2VcIixcbiAgICAgICAgICAgIFByb3BlcnRpZXM6IHt9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGV4cGVjdChzeW50aFdpdGhBc3BlY3RzKHN0YWNrKSkudG9NYXRjaElubGluZVNuYXBzaG90KGBcblwie1xuICBcXFxcXCJyZXNvdXJjZVxcXFxcIjoge1xuICAgIFxcXFxcInRlc3RcXFxcXCI6IHtcbiAgICAgIFxcXFxcImFkYXB0ZXJfYW5vdGhlcl9DODZBQkZFMlxcXFxcIjoge30sXG4gICAgICBcXFxcXCJhZGFwdGVyX3N1YmplY3RfMjRFODlEODRcXFxcXCI6IHtcbiAgICAgICAgXFxcXFwidmFsdWVcXFxcXCI6IFxcXFxcIlxcJHtzcGxpdChcXFxcXFxcXFxcXFxcIixcXFxcXFxcXFxcXFxcIiwgdGVzdC5hZGFwdGVyX2Fub3RoZXJfQzg2QUJGRTIuc3RyaW5nKX1cXFxcXCJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cIlxuYCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKFwiQ29uZGl0aW9uc1wiLCAoKSA9PiB7XG4gICAgaXQoXCJzaG91bGQgY3JlYXRlIGxvY2FscyBmb3IgY29uZGl0aW9uc1wiLCAoKSA9PiB7XG4gICAgICBuZXcgU3RhdGljQ2ZuQ29uc3RydWN0KGFkYXB0ZXIsIFwiY2ZuXCIsIHtcbiAgICAgICAgUmVzb3VyY2VzOiB7fSxcbiAgICAgICAgQ29uZGl0aW9uczoge1xuICAgICAgICAgIElzUHJvZDogeyBcIkZuOjpFcXVhbHNcIjogW1wiQVwiLCBcIkFcIl0gfSxcbiAgICAgICAgICBJc0RldjogeyBcIkZuOjpOb3RcIjogW1wiSXNQcm9kXCJdIH0sXG4gICAgICAgICAgQW5kOiB7IFwiRm46OkFuZFwiOiBbeyBDb25kaXRpb246IFwiSXNQcm9kXCIgfSwgdHJ1ZSwgdHJ1ZV0gfSxcbiAgICAgICAgICBPcjogeyBcIkZuOjpPclwiOiBbeyBDb25kaXRpb246IFwiSXNQcm9kXCIgfSwgdHJ1ZSwgdHJ1ZV0gfSxcbiAgICAgICAgICBJZjogeyBcIkZuOjpJZlwiOiBbXCJJc1Byb2RcIiwgMSwgMF0gfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgLy8gVE9ETzogY2hlY2sgaG93IChpZiBhdCBhbGwpIGxpdGVyYWwgdHJ1ZSBhbmQgZmFsc2UgY2FuIGJlIHBhc3NlZFxuICAgICAgLy8gVE9ETzogY2hlY2sgd2h5IFwiZmFsc2VcIiBlbmRzIHVwIGFzIHVuZGVmaW5lZFxuICAgICAgZXhwZWN0KHN5bnRoV2l0aEFzcGVjdHMoc3RhY2spKS50b01hdGNoSW5saW5lU25hcHNob3QoYFxuXCJ7XG4gIFxcXFxcImxvY2Fsc1xcXFxcIjoge1xuICAgIFxcXFxcImFkYXB0ZXJfY29uZGl0aW9uX0FuZF82OTZCNkIyMVxcXFxcIjogXFxcXFwiXFwkeygobG9jYWwuYWRhcHRlcl9jb25kaXRpb25fSXNQcm9kXzhGQjI5M0IxICYmIHRydWUpICYmIHRydWUpfVxcXFxcIixcbiAgICBcXFxcXCJhZGFwdGVyX2NvbmRpdGlvbl9JZl80NDEyRkVGOVxcXFxcIjogXFxcXFwiXFwke2xvY2FsLmFkYXB0ZXJfY29uZGl0aW9uX0lzUHJvZF84RkIyOTNCMSA/IDEgOiAwfVxcXFxcIixcbiAgICBcXFxcXCJhZGFwdGVyX2NvbmRpdGlvbl9Jc0Rldl9GREE4RDdCRFxcXFxcIjogXFxcXFwiXFwkeyFsb2NhbC5hZGFwdGVyX2NvbmRpdGlvbl9Jc1Byb2RfOEZCMjkzQjF9XFxcXFwiLFxuICAgIFxcXFxcImFkYXB0ZXJfY29uZGl0aW9uX0lzUHJvZF84RkIyOTNCMVxcXFxcIjogXFxcXFwiXFwkeyhcXFxcXFxcXFxcXFxcIkFcXFxcXFxcXFxcXFxcIiA9PSBcXFxcXFxcXFxcXFxcIkFcXFxcXFxcXFxcXFxcIil9XFxcXFwiLFxuICAgIFxcXFxcImFkYXB0ZXJfY29uZGl0aW9uX09yXzgzRDE3Nzk4XFxcXFwiOiBcXFxcXCJcXCR7KChsb2NhbC5hZGFwdGVyX2NvbmRpdGlvbl9Jc1Byb2RfOEZCMjkzQjEgfHwgdHJ1ZSkgfHwgdHJ1ZSl9XFxcXFwiXG4gIH1cbn1cIlxuYCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8qKlxuICogQ3VycmVudGx5IGBUZXN0aW5nLnN5bnRoYCBkb2VzIG5vdCBpbnZva2UgQXNwZWN0cywgc28gd2UgbWFrZSBzdXJlIHRoaXMgaGFwcGVuc1xuICogdGhpcyBpcyBub3QgYSBjb3JyZWN0IChyZWFkIGNvbXBsZXRlKSBpbnZvY2F0aW9uIG9mIEFzcGVjdHMsIGJ1dCBpdCBpbnZva2VzXG4gKiB0aGUgY29udmVydGlvbiBvZiB0aGUgQXdzVGVycmFmb3JtQWRhcHRlclxuICovXG5mdW5jdGlvbiBzeW50aFdpdGhBc3BlY3RzKHN0YWNrOiBUZXJyYWZvcm1TdGFjaykge1xuICBBc3BlY3RzLm9mKHN0YWNrKS5hbGwuZm9yRWFjaCgoYXNwZWN0KSA9PiBhc3BlY3QudmlzaXQoc3RhY2spKTtcblxuICByZXR1cm4gVGVzdGluZy5zeW50aChzdGFjayk7XG59XG5cbnJlZ2lzdGVyTWFwcGluZyhcIlRlc3Q6OlJlc291cmNlXCIsIHtcbiAgcmVzb3VyY2U6IChzY29wZSwgaWQsIHByb3BzKSA9PiB7XG4gICAgY29uc3QgY29udmVydGVkOiB7IFtpOiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIC8vIFwiUGFzY2FsQ2FzZVwiIHRvIFwiY2FtZWxDYXNlXCIgZm9yIGFsbCBrZXlzXG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgY29uc3QgY2RrdGZLZXkgPSBjYW1lbENhc2Uoa2V5KTtcbiAgICAgIGNvbnZlcnRlZFtjZGt0ZktleV0gPSBwcm9wc1trZXldO1xuICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBUZXN0UmVzb3VyY2Uoc2NvcGUsIGlkLCBjb252ZXJ0ZWQpO1xuICB9LFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgUmVmOiAocikgPT4gci5nZXRTdHJpbmdBdHRyaWJ1dGUoXCJyZWZcIiksXG4gICAgQXJuOiAocikgPT4gci5nZXRTdHJpbmdBdHRyaWJ1dGUoXCJhcm5cIiksXG4gICAgTGlzdDogKHIpID0+IHIuZ2V0TGlzdEF0dHJpYnV0ZShcImxpc3RcIikgYXMgYW55LFxuICAgIEJvb2w6IChyKSA9PiByLmdldEJvb2xlYW5BdHRyaWJ1dGUoXCJib29sXCIpIGFzIGFueSxcbiAgICBTdHJpbmc6IChyKSA9PiByLmdldFN0cmluZ0F0dHJpYnV0ZShcInN0cmluZ1wiKSxcbiAgICBOdW1iZXI6IChyKSA9PiByLmdldE51bWJlckF0dHJpYnV0ZShcIm51bWJlclwiKSBhcyBhbnksXG4gICAgTWFwOiAocikgPT4gci5nZXRTdHJpbmdBdHRyaWJ1dGUoXCJtYXBcIikgYXMgYW55LFxuICB9LFxufSk7XG5cbi8qKlxuICogcmVzb3VyY2UgZm9yIHRlc3RpbmcgcHVycG9zZXMgdGhhdCB3aWxsIGp1c3QgY29udmVydCBldmVyeXRoaW5nIHRvIHNuYWtlIGNhc2VcbiAqL1xuY2xhc3MgVGVzdFJlc291cmNlIGV4dGVuZHMgVGVycmFmb3JtUmVzb3VyY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJpdmF0ZSBjb25maWc6IHsgW2k6IHN0cmluZ106IGFueSB9XG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgeyB0ZXJyYWZvcm1SZXNvdXJjZVR5cGU6IFwidGVzdFwiIH0pO1xuICB9XG4gIHN5bnRoZXNpemVBdHRyaWJ1dGVzKCkge1xuICAgIGNvbnN0IGNvbnZlcnRlZDogeyBbaTogc3RyaW5nXTogYW55IH0gPSB7fTtcbiAgICBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjZGt0ZktleSA9IHNuYWtlQ2FzZShrZXkpO1xuICAgICAgY29udmVydGVkW2Nka3RmS2V5XSA9IHRoaXMuY29uZmlnW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbnZlcnRlZDtcbiAgfVxufVxuXG5jbGFzcyBTdGF0aWNDZm5Db25zdHJ1Y3QgZXh0ZW5kcyBDZm5FbGVtZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByaXZhdGUgY2ZuOiBDbG91ZEZvcm1hdGlvblRlbXBsYXRlXG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gIH1cblxuICBfdG9DbG91ZEZvcm1hdGlvbigpOiBvYmplY3Qge1xuICAgIHJldHVybiB0aGlzLmNmbjtcbiAgfVxufVxuIl19