import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port: number = app.get(ConfigService).get<number>('PORT') ?? 3000;
  
  await app.listen(port, () => {
    Logger.log(`Server is running on port ${port}`);
  });
}
await bootstrap();
