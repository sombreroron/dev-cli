import { Command, CommandRunner } from 'nest-commander';
import { execSync } from 'child_process';
import { Inject } from '@nestjs/common';
import { VersionService } from '../version/version.service';

@Command({
  name: 'update',
  description: 'Update CLI version',
})
export class UpdateCommand extends CommandRunner {
  constructor(private versionService: VersionService) {
    super();
  }

  async run() {
    console.log('Updating CLI version...');

    execSync('npm update -g dev-cli');

    console.log(
      'CLI version updated. Current version:',
      await this.versionService.getVersion(),
    );
  }
}
