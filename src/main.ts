import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';
import { ConsoleLogger, Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      logLevels: ['error', 'warn', 'log'],
      colors: true,
    }),
  });

  const port: number = app.get(ConfigService).get<number>('PORT') ?? 3000;

  app.enableCors({
    origin: [`http://localhost:${port}`],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.enableShutdownHooks();

  await app.listen(port, () => {
    Logger.log(`Server is running on port ${port}`);
  });
}
await bootstrap();
