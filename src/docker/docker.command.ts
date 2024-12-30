import { Command, CommandRunner } from 'nest-commander';
import { RemoveAllCommand } from './remove-all.command';

@Command({
  name: 'docker',
  description: 'Docker commands',
  subCommands: [RemoveAllCommand],
})
export class DockerCommand extends CommandRunner {
  async run() {
    this.command.outputHelp();
  }
}
