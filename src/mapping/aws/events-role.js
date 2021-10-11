"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const provider_aws_1 = require("@cdktf/provider-aws");
// TODO: types for CloudFormation Resources? would be really nice.
index_1.registerMapping("AWS::Events::Rule", {
    resource: (scope, id, props) => {
        const ruleProps = {
            name: props.Name,
            isEnabled: props.State === "ENABLED"
                ? true
                : props.State === "DISABLED"
                    ? false
                    : undefined,
            description: props.Description,
            eventBusName: props.EventBusName,
            eventPattern: props.EventPattern,
            roleArn: props.RoleArn,
            scheduleExpression: props.ScheduleExpression,
        };
        delete props.Name;
        delete props.State;
        delete props.Description;
        delete props.EventBusName;
        delete props.EventPattern;
        delete props.RoleArn;
        delete props.ScheduleExpression; // TODO: use some utility for this simple naming mapping (needs to have the mapping in guessing resource mapper made reusable somehow)
        const rule = new provider_aws_1.CloudwatchEventRule(scope, id, ruleProps);
        (props.Targets || []).map((target, idx) => {
            var _a, _b;
            const targetProps = {
                arn: target.Arn,
                rule: rule.id,
                batchTarget: target.BatchParameters
                    ? [
                        {
                            jobDefinition: target.BatchParameters.JobDefinition,
                            jobName: target.BatchParameters.JobName,
                            arraySize: (_a = target.BatchParameters.ArrayProperties) === null || _a === void 0 ? void 0 : _a.Size,
                            jobAttempts: (_b = target.BatchParameters.RetryStrategy) === null || _b === void 0 ? void 0 : _b.Attempts,
                        },
                    ]
                    : undefined,
                deadLetterConfig: target.DeadLetterConfig
                    ? [
                        {
                            arn: target.DeadLetterConfig.Arn,
                        },
                    ]
                    : undefined,
            };
            delete props.Targets;
            return new provider_aws_1.CloudwatchEventTarget(scope, `${id}_target${idx}`, targetProps);
        });
        return rule;
    },
    attributes: {
        Arn: (rule) => rule.arn,
        Ref: (rule) => rule.id,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLXJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudHMtcm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9DQUEyQztBQUMzQyxzREFLNkI7QUFFN0Isa0VBQWtFO0FBRWxFLHVCQUFlLENBQUMsbUJBQW1CLEVBQUU7SUFDbkMsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QixNQUFNLFNBQVMsR0FBOEI7WUFDM0MsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFNBQVMsRUFDUCxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVM7Z0JBQ3ZCLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFVBQVU7b0JBQzVCLENBQUMsQ0FBQyxLQUFLO29CQUNQLENBQUMsQ0FBQyxTQUFTO1lBQ2YsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7U0FDN0MsQ0FBQztRQUNGLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQztRQUNsQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkIsT0FBTyxLQUFLLENBQUMsV0FBVyxDQUFDO1FBQ3pCLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsc0lBQXNJO1FBRXZLLE1BQU0sSUFBSSxHQUFHLElBQUksa0NBQW1CLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUzRCxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBVyxFQUFFLEdBQVcsRUFBRSxFQUFFOztZQUNyRCxNQUFNLFdBQVcsR0FBZ0M7Z0JBQy9DLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxlQUFlO29CQUNqQyxDQUFDLENBQUM7d0JBQ0U7NEJBQ0UsYUFBYSxFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsYUFBYTs0QkFDbkQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTzs0QkFDdkMsU0FBUyxRQUFFLE1BQU0sQ0FBQyxlQUFlLENBQUMsZUFBZSwwQ0FBRSxJQUFJOzRCQUN2RCxXQUFXLFFBQUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxhQUFhLDBDQUFFLFFBQVE7eUJBQzVEO3FCQUNGO29CQUNILENBQUMsQ0FBQyxTQUFTO2dCQUNiLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxnQkFBZ0I7b0JBQ3ZDLENBQUMsQ0FBQzt3QkFDRTs0QkFDRSxHQUFHLEVBQUUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUc7eUJBQ2pDO3FCQUNGO29CQUNILENBQUMsQ0FBQyxTQUFTO2FBR2QsQ0FBQztZQUNGLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUVyQixPQUFPLElBQUksb0NBQXFCLENBQzlCLEtBQUssRUFDTCxHQUFHLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFDcEIsV0FBVyxDQUNaLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELFVBQVUsRUFBRTtRQUNWLEdBQUcsRUFBRSxDQUFDLElBQXlCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHO1FBQzVDLEdBQUcsRUFBRSxDQUFDLElBQXlCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO0tBQzVDO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVnaXN0ZXJNYXBwaW5nIH0gZnJvbSBcIi4uL2luZGV4XCI7XG5pbXBvcnQge1xuICBDbG91ZHdhdGNoRXZlbnRSdWxlLFxuICBDbG91ZHdhdGNoRXZlbnRSdWxlQ29uZmlnLFxuICBDbG91ZHdhdGNoRXZlbnRUYXJnZXQsXG4gIENsb3Vkd2F0Y2hFdmVudFRhcmdldENvbmZpZyxcbn0gZnJvbSBcIkBjZGt0Zi9wcm92aWRlci1hd3NcIjtcblxuLy8gVE9ETzogdHlwZXMgZm9yIENsb3VkRm9ybWF0aW9uIFJlc291cmNlcz8gd291bGQgYmUgcmVhbGx5IG5pY2UuXG5cbnJlZ2lzdGVyTWFwcGluZyhcIkFXUzo6RXZlbnRzOjpSdWxlXCIsIHtcbiAgcmVzb3VyY2U6IChzY29wZSwgaWQsIHByb3BzKSA9PiB7XG4gICAgY29uc3QgcnVsZVByb3BzOiBDbG91ZHdhdGNoRXZlbnRSdWxlQ29uZmlnID0ge1xuICAgICAgbmFtZTogcHJvcHMuTmFtZSxcbiAgICAgIGlzRW5hYmxlZDpcbiAgICAgICAgcHJvcHMuU3RhdGUgPT09IFwiRU5BQkxFRFwiXG4gICAgICAgICAgPyB0cnVlXG4gICAgICAgICAgOiBwcm9wcy5TdGF0ZSA9PT0gXCJESVNBQkxFRFwiXG4gICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgIDogdW5kZWZpbmVkLCAvLyBUT0RPOiB0aGlzIG1pZ2h0IGJlIGEgY29tbW9uIGNhc2UgZm9yIHRoZSBhdXRvbWFwcGVyIHRvIGNoZWNrIGZvciAvIG9yIGNvbW1vbiBwYXR0ZXJuIHRvIGJ1aWxkIGEgdXRpbGl0eSBmb3JcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5EZXNjcmlwdGlvbixcbiAgICAgIGV2ZW50QnVzTmFtZTogcHJvcHMuRXZlbnRCdXNOYW1lLFxuICAgICAgZXZlbnRQYXR0ZXJuOiBwcm9wcy5FdmVudFBhdHRlcm4sXG4gICAgICByb2xlQXJuOiBwcm9wcy5Sb2xlQXJuLFxuICAgICAgc2NoZWR1bGVFeHByZXNzaW9uOiBwcm9wcy5TY2hlZHVsZUV4cHJlc3Npb24sXG4gICAgfTtcbiAgICBkZWxldGUgcHJvcHMuTmFtZTtcbiAgICBkZWxldGUgcHJvcHMuU3RhdGU7XG4gICAgZGVsZXRlIHByb3BzLkRlc2NyaXB0aW9uO1xuICAgIGRlbGV0ZSBwcm9wcy5FdmVudEJ1c05hbWU7XG4gICAgZGVsZXRlIHByb3BzLkV2ZW50UGF0dGVybjtcbiAgICBkZWxldGUgcHJvcHMuUm9sZUFybjtcbiAgICBkZWxldGUgcHJvcHMuU2NoZWR1bGVFeHByZXNzaW9uOyAvLyBUT0RPOiB1c2Ugc29tZSB1dGlsaXR5IGZvciB0aGlzIHNpbXBsZSBuYW1pbmcgbWFwcGluZyAobmVlZHMgdG8gaGF2ZSB0aGUgbWFwcGluZyBpbiBndWVzc2luZyByZXNvdXJjZSBtYXBwZXIgbWFkZSByZXVzYWJsZSBzb21laG93KVxuXG4gICAgY29uc3QgcnVsZSA9IG5ldyBDbG91ZHdhdGNoRXZlbnRSdWxlKHNjb3BlLCBpZCwgcnVsZVByb3BzKTtcblxuICAgIChwcm9wcy5UYXJnZXRzIHx8IFtdKS5tYXAoKHRhcmdldDogYW55LCBpZHg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgdGFyZ2V0UHJvcHM6IENsb3Vkd2F0Y2hFdmVudFRhcmdldENvbmZpZyA9IHtcbiAgICAgICAgYXJuOiB0YXJnZXQuQXJuLFxuICAgICAgICBydWxlOiBydWxlLmlkLFxuICAgICAgICBiYXRjaFRhcmdldDogdGFyZ2V0LkJhdGNoUGFyYW1ldGVyc1xuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgam9iRGVmaW5pdGlvbjogdGFyZ2V0LkJhdGNoUGFyYW1ldGVycy5Kb2JEZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgIGpvYk5hbWU6IHRhcmdldC5CYXRjaFBhcmFtZXRlcnMuSm9iTmFtZSxcbiAgICAgICAgICAgICAgICBhcnJheVNpemU6IHRhcmdldC5CYXRjaFBhcmFtZXRlcnMuQXJyYXlQcm9wZXJ0aWVzPy5TaXplLFxuICAgICAgICAgICAgICAgIGpvYkF0dGVtcHRzOiB0YXJnZXQuQmF0Y2hQYXJhbWV0ZXJzLlJldHJ5U3RyYXRlZ3k/LkF0dGVtcHRzLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICBkZWFkTGV0dGVyQ29uZmlnOiB0YXJnZXQuRGVhZExldHRlckNvbmZpZ1xuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXJuOiB0YXJnZXQuRGVhZExldHRlckNvbmZpZy5Bcm4sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiB1bmRlZmluZWQsXG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBpbmNvbXBsZXRlLCBzZWU6IGh0dHBzOi8vZG9jcy5hd3MuYW1hem9uLmNvbS9BV1NDbG91ZEZvcm1hdGlvbi9sYXRlc3QvVXNlckd1aWRlL2F3cy1wcm9wZXJ0aWVzLWV2ZW50cy1ydWxlLXRhcmdldC5odG1sXG4gICAgICB9O1xuICAgICAgZGVsZXRlIHByb3BzLlRhcmdldHM7XG5cbiAgICAgIHJldHVybiBuZXcgQ2xvdWR3YXRjaEV2ZW50VGFyZ2V0KFxuICAgICAgICBzY29wZSxcbiAgICAgICAgYCR7aWR9X3RhcmdldCR7aWR4fWAsXG4gICAgICAgIHRhcmdldFByb3BzXG4gICAgICApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH0sXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBBcm46IChydWxlOiBDbG91ZHdhdGNoRXZlbnRSdWxlKSA9PiBydWxlLmFybixcbiAgICBSZWY6IChydWxlOiBDbG91ZHdhdGNoRXZlbnRSdWxlKSA9PiBydWxlLmlkLFxuICB9LFxufSk7XG4iXX0=