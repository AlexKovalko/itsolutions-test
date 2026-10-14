import { ArgsType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { IsString, IsOptional } from "class-validator";

@ArgsType()
export class ProfileArgs {
    @Field(() => String, { nullable: true, description: "Profile ID" })
    @IsOptional()
    @Type(() => String)
    @IsString()
    id?: string;

    @Field(() => String, { nullable: true, description: "Profile slug" })
    @IsOptional()
    @Type(() => String)
    @IsString()
    slug?: string;
}
