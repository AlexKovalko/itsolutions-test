import { Logger } from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Application } from './configs/application.js';

const configs: ClassConstructor<object>[] = [Application];
const logger = new Logger('EnvValidation');

export function validate(config: Record<string, unknown>) {
  const validated: Record<string, unknown> = { ...config };

  for (const ConfigClass of configs) {
    const instance = plainToInstance(ConfigClass, config, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(instance, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }

    logger.log(`${ConfigClass.name} config is valid`);

    Object.assign(validated, instance);
  }

  logger.log('All configs are valid.');
  return validated;
}
