import { Field, ObjectType } from "@nestjs/graphql";
import { Profile } from "./profile.model.js";

@ObjectType()
export class Skill {
    @Field(() => String)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => Number)
    sortOrder: number = 0;

    @Field(() => String)
    profileId: string;

    @Field(() => Profile)
    profile: Profile;

    @Field(() => Date)
    createdAt: Date = new Date();

    @Field(() => Date)
    updatedAt: Date = new Date();
}
