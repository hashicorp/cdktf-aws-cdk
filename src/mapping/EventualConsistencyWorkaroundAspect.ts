import { IAspect, TerraformResource, TerraformStack } from "cdktf";
import { resolve } from "cdktf/lib/_tokens";
import { findTokens } from "cdktf/lib/tokens/private/resolve";
import { IConstruct } from "constructs";
import { Sleep, TimeProvider } from "../time";
import { CloudcontrolapiResource } from "../aws";

interface EventualConsistencyWorkaroundAspectOptions {
  createDurationSeconds: number;
  destroyDurationSeconds: number;
}

/**
 * This Aspect serves as a workaround for eventually consistent resources (e.g. IAM resources)
 * It has to be added to the root (i.e. the Terraform Stack) so that it is invoked 
 * on all resources that might reference the `eventualConsistentTarget` which is passed when
 * instantiating an `EventualConsistencyWorkaroundAspect`.
 * 
 * How does it work?
 * - The `visit` function will be invoked for every resource in e.g. the TerraformStack
 * - Whenever a visited resource contains a reference to a property of the `eventualConsistentTarget`
 *   a `time_sleep` resource will be added as a dependency for that resource
 * - The `time_sleep` resource itself depends on the `eventualConsistentTarget` and by default waits
 *   20 seconds after the `eventualConsistentTarget` was created until it marks itself as done
 * - The dependend resources will then have their dependency on `time_sleep` fullfilled and will start
 *   to deploy
 */
export class EventualConsistencyWorkaroundAspect implements IAspect {
  private sleepResource?: Sleep;

  constructor(
    private eventualConsistentTarget: TerraformResource,
    private options: EventualConsistencyWorkaroundAspectOptions = {
      createDurationSeconds: 20,
      destroyDurationSeconds: 0,
    }
  ) {}

  visit(node: IConstruct) {
    if (
      node instanceof TerraformResource &&
      node instanceof CloudcontrolapiResource &&
      dependsOn(node, this.eventualConsistentTarget)
    ) {
      if (!node.dependsOn) {
        node.dependsOn = [];
      }
      node.dependsOn.push(this.getSleepResource().fqn);
    }
  }

  /**
   * makes sure we reuse the same sleep resource for the same eventual consistent target
   * (aka for an instance of this class)
   */
  private getSleepResource(): Sleep {
    if (!this.sleepResource) {
      this.sleepResource = new Sleep(
        this.eventualConsistentTarget,
        `sleep_${this.eventualConsistentTarget.node.id}`,
        {
          createDuration: `${this.options.createDurationSeconds}s`,
          destroyDuration: `${this.options.destroyDurationSeconds}s`,
          dependsOn: [this.eventualConsistentTarget],
          provider: EventualConsistencyWorkaroundAspect.getTimeProvider(
            TerraformStack.of(this.eventualConsistentTarget)
          ),
        }
      );
    }
    return this.sleepResource;
  }

  // The CDK for Terraform currently requires providers to be configured even if they don't have
  // any config. As we cannot know whether the stack already contains a time provider, we create
  // an aliased one for usage within this Aspect
  private static timeProvider?: TimeProvider;
  private static getTimeProvider(stack: TerraformStack): TimeProvider {
    if (!EventualConsistencyWorkaroundAspect.timeProvider) {
      EventualConsistencyWorkaroundAspect.timeProvider = new TimeProvider(
        stack,
        "eventual_consistency_workaround_aspect",
        {
          alias: "awsadapter_eventual_consistency_workaround_aspect",
        }
      );
    }
    return EventualConsistencyWorkaroundAspect.timeProvider;
  }
}

/**
 * returns true if source contains a property that depends on target
 */
function dependsOn(
  source: TerraformResource,
  target: TerraformResource
): boolean {
  const tokens = findTokens(TerraformStack.of(source), () =>
    source.toTerraform()
  );

  // Checks if there's at least one token that resolves to an Terraform reference
  // which references the target
  // e.g. resolved could be "${aws_iam_role.typescriptcronlambda_adapter_lambdaServiceRole494E4CA6_233C76C0.arn}"
  // which includes the target "aws_iam_role.typescriptcronlambda_adapter_lambdaServiceRole494E4CA6_233C76C0"
  return tokens.some((token) => {
    const resolved = resolve(TerraformStack.of(source), token) as any;
    return typeof resolved === "string" && resolved.includes(target.fqn);
  });
}
