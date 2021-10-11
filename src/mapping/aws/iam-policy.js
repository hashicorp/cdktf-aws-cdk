"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const provider_aws_1 = require("@cdktf/provider-aws");
const helper_1 = require("../helper");
index_1.registerMapping("AWS::IAM::Policy", {
    resource: helper_1.createGuessingResourceMapper(provider_aws_1.IamPolicy, {
        PolicyDocument: (doc) => ({
            tfAttributeName: "policy",
            value: JSON.stringify(doc),
        }),
    }),
    attributes: {
        Arn: (policy) => policy.arn,
        Ref: (policy) => policy.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLXBvbGljeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlhbS1wb2xpY3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQ0FBMkM7QUFDM0Msc0RBQWdEO0FBQ2hELHNDQUF5RDtBQUV6RCx1QkFBZSxDQUFDLGtCQUFrQixFQUFFO0lBQ2xDLFFBQVEsRUFBRSxxQ0FBNEIsQ0FBQyx3QkFBUyxFQUFFO1FBQ2hELGNBQWMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4QixlQUFlLEVBQUUsUUFBUTtZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7U0FDM0IsQ0FBQztLQUNILENBQUM7SUFDRixVQUFVLEVBQUU7UUFDVixHQUFHLEVBQUUsQ0FBQyxNQUFpQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRztRQUN0QyxHQUFHLEVBQUUsQ0FBQyxNQUFpQixFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRTtLQUN0QztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyTWFwcGluZyB9IGZyb20gXCIuLi9pbmRleFwiO1xuaW1wb3J0IHsgSWFtUG9saWN5IH0gZnJvbSBcIkBjZGt0Zi9wcm92aWRlci1hd3NcIjtcbmltcG9ydCB7IGNyZWF0ZUd1ZXNzaW5nUmVzb3VyY2VNYXBwZXIgfSBmcm9tIFwiLi4vaGVscGVyXCI7XG5cbnJlZ2lzdGVyTWFwcGluZyhcIkFXUzo6SUFNOjpQb2xpY3lcIiwge1xuICByZXNvdXJjZTogY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlcihJYW1Qb2xpY3ksIHtcbiAgICBQb2xpY3lEb2N1bWVudDogKGRvYykgPT4gKHtcbiAgICAgIHRmQXR0cmlidXRlTmFtZTogXCJwb2xpY3lcIixcbiAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShkb2MpLFxuICAgIH0pLFxuICB9KSxcbiAgYXR0cmlidXRlczoge1xuICAgIEFybjogKHBvbGljeTogSWFtUG9saWN5KSA9PiBwb2xpY3kuYXJuLFxuICAgIFJlZjogKHBvbGljeTogSWFtUG9saWN5KSA9PiBwb2xpY3kuaWQsXG4gIH0sXG59KTtcbiJdfQ==