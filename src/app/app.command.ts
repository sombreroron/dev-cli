import { CommandRunner, RootCommand } from 'nest-commander';
import { VersionService } from '../version/version.service';

@RootCommand({
  name: 'edi',
})
export class AppCommand extends CommandRunner {
  constructor(private versionService: VersionService) {
    super();
  }

  async run() {
    const version = this.versionService.getVersion();
    const remoteVersion = await this.versionService.getRemoteVersion();

    process.stdout.write(`CLI version: ${version}\n`);

    if (
      version !== 'unknown' &&
      remoteVersion !== 'unknown' &&
      version !== remoteVersion
    ) {
      process.stdout.write(`Update available: ${remoteVersion}\n`);
    }

    this.command.outputHelp();
  }
}
