import { Module } from "@nestjs/common";
import { ProfileResolver } from "./profile.resolver.js";

@Module({
    imports: [],
    controllers: [],
    providers: [ProfileResolver],
    exports: [],
})
export class ProfileModule {}
