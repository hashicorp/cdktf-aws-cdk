"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const provider_aws_1 = require("@cdktf/provider-aws");
const helper_1 = require("../helper");
index_1.registerMapping("AWS::IAM::Role", {
    resource: helper_1.createGuessingResourceMapper(provider_aws_1.IamRole, {
        AssumeRolePolicyDocument: (doc) => ({
            tfAttributeName: "assumeRolePolicy",
            value: JSON.stringify(doc),
        }),
    }),
    attributes: {
        Arn: (role) => role.arn,
        Ref: (role) => role.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLXJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpYW0tcm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUEyQztBQUMzQyxzREFBOEM7QUFDOUMsc0NBQXlEO0FBRXpELHVCQUFlLENBQUMsZ0JBQWdCLEVBQUU7SUFDaEMsUUFBUSxFQUFFLHFDQUE0QixDQUFDLHNCQUFPLEVBQUU7UUFDOUMsd0JBQXdCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEMsZUFBZSxFQUFFLGtCQUFrQjtZQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7U0FDM0IsQ0FBQztLQUNILENBQUM7SUFDRixVQUFVLEVBQUU7UUFDVixHQUFHLEVBQUUsQ0FBQyxJQUFhLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQ2hDLEdBQUcsRUFBRSxDQUFDLElBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7S0FDaEM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3Rlck1hcHBpbmcgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCB7IElhbVJvbGUgfSBmcm9tIFwiQGNka3RmL3Byb3ZpZGVyLWF3c1wiO1xuaW1wb3J0IHsgY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlciB9IGZyb20gXCIuLi9oZWxwZXJcIjtcblxucmVnaXN0ZXJNYXBwaW5nKFwiQVdTOjpJQU06OlJvbGVcIiwge1xuICByZXNvdXJjZTogY3JlYXRlR3Vlc3NpbmdSZXNvdXJjZU1hcHBlcihJYW1Sb2xlLCB7XG4gICAgQXNzdW1lUm9sZVBvbGljeURvY3VtZW50OiAoZG9jKSA9PiAoe1xuICAgICAgdGZBdHRyaWJ1dGVOYW1lOiBcImFzc3VtZVJvbGVQb2xpY3lcIixcbiAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShkb2MpLFxuICAgIH0pLFxuICB9KSxcbiAgYXR0cmlidXRlczoge1xuICAgIEFybjogKHJvbGU6IElhbVJvbGUpID0+IHJvbGUuYXJuLFxuICAgIFJlZjogKHJvbGU6IElhbVJvbGUpID0+IHJvbGUuaWQsXG4gIH0sXG59KTtcbiJdfQ==