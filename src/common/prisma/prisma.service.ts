import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client.js';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(private readonly configService: ConfigService) {
    const adapter = new PrismaPg({
      connectionString: configService.getOrThrow<string>('DB_URL'),
    });
    super({ adapter });
  }

  async onModuleInit() {
    await this.$connect().catch((error: Error) => {
      Logger.error(error);
    });
  }

  async onModuleDestroy() {
    await this.$disconnect().catch((error: Error) => {
      Logger.error(error);
    });
  }
}
