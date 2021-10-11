import { NodeProject } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';

/**
 * Checks for new versions of the given provider and creates a PR with an upgrade change if there are changes.
 */
export class ProviderUpgrade {
  constructor(project: NodeProject) {
    const workflow = project.github?.addWorkflow('provider-upgrade');

    if (!workflow) throw new Error('no workflow defined');

    workflow.on({
      schedule: [{ cron: '0 */4 * * *' }], // Run every 4 hours
      workflowDispatch: {}, // allow manual triggering
    });

    workflow.addJobs({
      upgrade: {
        runsOn: 'ubuntu-latest',
        steps: [
          {
            name: 'Checkout',
            uses: 'actions/checkout@v2',
          },
          { run: 'yarn install' },
          { run: 'yarn fetch' },
          // generate docs
          { run: 'yarn compile' },
          { run: 'yarn docgen' },

          // submit a PR
          {
            name: 'Create Pull Request',
            uses: 'peter-evans/create-pull-request@v3',
            with: {
              'commit-message': 'chore: upgrade provider',
              'branch': 'auto/provider-upgrade',
              'title': 'chore: upgrade provider',
              'body': 'This PR upgrades provider to the latest version',
              'labels': 'automerge',
            },
          },
        ],
        permissions: {
          pullRequests: JobPermission.WRITE,
          issues: JobPermission.WRITE,
          contents: JobPermission.WRITE,
          statuses: JobPermission.WRITE,
        },
      },
    });
  }
}
