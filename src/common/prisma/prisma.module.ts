import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { Database } from "../configs/database.js";
import { PrismaService } from "./prisma.service.js";

@Module({
    imports: [
        ConfigModule.forFeature(() => Database),
    ],
    controllers: [],
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
