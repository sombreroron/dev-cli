import { Injectable } from '@nestjs/common';
import { execSync } from 'child_process';

@Injectable()
export class VersionService {
  getVersion(): string {
    try {
      const dep = execSync('npm ls -g dev-cli --json', {
        encoding: 'utf-8',
      }).trim();
      const version = JSON.parse(dep).dependencies['dev-cli'].version;

      return version;
    } catch (e) {
      return 'unknown';
    }
  }

  getRemoteVersion(): string {
    try {
      return execSync('npm show @elementor/development-interface version', {
        encoding: 'utf-8',
      }).trim();
    } catch (e) {
      return 'unknown';
    }
  }
}
