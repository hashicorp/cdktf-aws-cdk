import { javascript } from 'projen';

/**
 * Checks for new versions of the given provider and creates a PR with an upgrade change if there are changes.
 */
export class AutoMerge {
  constructor(project: javascript.NodeProject) {
    const workflow = project.github?.addWorkflow('automerge');

    if (!workflow) throw new Error('no workflow defined');

    workflow.on({
      pullRequest: {
        types: [
          'labeled',
          'unlabeled',
          'synchronize',
          'opened',
          'edited',
          'ready_for_review',
          'reopened',
          'unlocked',
        ],
      },
      pullRequestReview: {
        types: ['submitted'],
      },
      checkSuite: {
        types: ['completed'],
      },
      status: {},
    });

    workflow.addJobs({
      automerge: {
        runsOn: ['ubuntu-latest'],
        steps: [
          {
            name: 'automerge',
            uses: 'pascalgn/automerge-action@v0.14.2',
            env: {
              GITHUB_TOKEN: '${{ secrets.GH_TOKEN }}',
              MERGE_RETRIES: '20',
              MERGE_RETRY_SLEEP: '60000',
            },
          },
        ],
        permissions: {},
      },
    });
  }
}
