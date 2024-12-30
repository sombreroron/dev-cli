#!/usr/bin/env node

import { AppModule } from './app.module';
import { CommandFactory } from 'nest-commander';

async function bootstrap() {
  await CommandFactory.run(AppModule);
}

bootstrap().catch((e) => {
  process.stderr.write(`Application failed with error: ${e.message}`);
  process.exit(1);
});
