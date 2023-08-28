# Contributing

This document aims to provide guidance on recommended contribution practices as well as an introduction to common workflows when contributing.

Note: All communication on GitHub, the community forum, and other HashiCorp-provided communication channels is subject to the [HashiCorp community guidelines](https://www.hashicorp.com/community-guidelines).

## Questions

For general problems you encounter that may not require a core maintainer to answer, post your question in our [community forum](https://discuss.hashicorp.com/c/terraform-core/cdk-for-terraform/). Otherwise if you believe the problem stems from a bug, please feel free to create a new issue describing the problem.

## Issues

This section goes over what we are looking for in regards to reported issues.

### Reporting an Issue

If you encounter a bug you can help us by submitting an issue, though make sure it is not covered by an existing Github issue. If an existing issue covers your discovered bug, be sure to upvote it for increased visibility. If you feel inclined to solve this issue yourself you can always submit a Pull Request with the fix– though be sure to link the issue containing the problem.

When reporting a bug we ask that you include:

- CDKTF & language versions being used
- Affected Resource(s)
- Github Gist containing the Debug output
- Expected Behavior vs. Actual Behavior
- Steps to reproduce the issue
- Other important info about the issue
- Any relevant Github issues, pull requests, and/or documentation that provides greater context

### Proposing a Feature

In order to be respectful of the time of community contributors, we aim to discuss new potential feature and changes in GitHub issues prior to their implementation. This allows us to vet the potential utility of the change, as well as discuss how it could potentially fit into work currently being done, or a future milestone.

When proposing a feature we ask that you include:

- A description of the feature to add
- Any relevant Github issues, pull requests, blog posts, and/or documentation that provides greater context

## Pull Requests

Your pull request should have a description of what it accomplishes. If applicable, PRs should include testing that validate correctness. In all cases the existing tests must pass.

### Guidelines

Before you submit your Pull Request (PR) consider the following guidelines:

- Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate existing efforts.
- Be sure that an existing issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design upfront helps to ensure that we're ready to accept your work. Make sure that this issue is referenced in your PR– this can be done by including `Closes: #[issue number]` in the PR's description. Please note that our team may need a week or more before they can review the details in your issue and discuss whether a feature request is something we see value in adding, so bear that in mind before starting work on large PRs. Failure to do so can lead to PRs being left in an unmerged state due to conflicts with our design or current product strategy.
- Please sign our Contributor License Agreement (CLA) before sending PRs. We cannot accept code without a signed CLA. Make sure you author all contributed Git commits with the email address associated with your CLA signature.

### Pull Request Lifecycle

1. You are welcome to submit an initial draft pull request for commentary before it is fully completed. It's also helpful to include comments on items you'd like feedback on or feel needs further discussion. Once you believe your pull request is ready to be merged you can set your pull request to open.
2. When time permits and all checks have passed, Terraform CDK team members will review your PR. From here the pull request will either be merged, or additional changed may be requested in comments. We may also have questions that we need answered about the code, due to something that needs greater clarification or just because we want to better understand your thought process Please note that the responsibility for passing tests belongs to the author of the PR. If you're having significant trouble with getting tests to pass, please write `@hashicorp/cdktf` in a comment on the PR to request assistance.
3. When we request changes, you have two options. You can either make those changes or, if you disagree with the suggested changes, a conversation can be had about our respective reasonings where we can then agree on a path forward. In many instances this may be a multi-step process. Pull requests are a great venue for the team and our community to collaborate, and we welcome conversations about how to improve things.
4. Once all outstanding comments and checklist items have been addressed, your contribution will be merged!

## Style

### Commits

For commits, we use the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) format.

### Pull Requests

Pull Request titles follow the following format:

**Type(Affected_Component): Short description of PR**

Ensuring your PR titles follow this format helps us quickly identify the purpose of the PR and scope in which it contributes. Additionally, this format ensures our automatically generated CHANGELOG which uses these titles is properly descriptive.

#### Type:

- feat(Affected_Component): A addition of a feature within the Affected Component
- fix(Affected_Component): A bug fix within the Affected Component
- refactor(Affected_Component): A refactor within the Affected Component
- chore: Updates to docs, CI work, and more generally work that does not fall under the previous categories
