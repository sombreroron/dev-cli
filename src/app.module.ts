import { Module } from '@nestjs/common';
import { DockerCommand } from './docker/docker.command';
import { VersionService } from './version/version.service';
import { AppCommand } from './app/app.command';
import { UpdateCommand } from './update/update.command';

@Module({
  imports: [],
  controllers: [],
  providers: [
    VersionService,
    ...AppCommand.registerWithSubCommands(),
    ...DockerCommand.registerWithSubCommands(),
    ...UpdateCommand.registerWithSubCommands(),
  ],
})
export class AppModule {}
