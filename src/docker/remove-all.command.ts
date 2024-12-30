import { CommandRunner, SubCommand, Option } from 'nest-commander';
import { spawnSync } from 'child_process';

interface DockerRemoveOptions {
  force?: boolean;
}

@SubCommand({ name: 'rm_all', description: 'Remove all docker containers' })
export class RemoveAllCommand extends CommandRunner {
  async run(
    passedParam: string[],
    options?: DockerRemoveOptions,
  ): Promise<void> {
    // Run Docker command to get all container IDs (silent operation)
    const { stdout } = spawnSync('docker', ['ps', '-aq'], {
      encoding: 'utf-8',
    });
    // Convert the list of container IDs into an array
    const containerIds = stdout.trim().split('\n');
    if (containerIds.length > 0) {
      const command = ['rm'];

      if (options?.force) {
        command.push('-f');
      }

      spawnSync('docker', [...command, ...containerIds], {
        stdio: 'inherit',
      });
    }
  }

  @Option({
    flags: '-f, --force [boolean]',
    description: 'Force remove all containers, even if running',
  })
  parseForce(val: boolean): boolean {
    return Boolean(val) === true;
  }
}
