import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Link {
    @Field(() => String)
    id: string;

    @Field(() => String)
    label: string;

    @Field(() => String)
    url: string;

    @Field(() => Number)
    sortOrder: number = 0;

    @Field(() => String)
    profileId: string;

    @Field(() => Date)
    createdAt: Date = new Date();

    @Field(() => Date)
    updatedAt: Date = new Date();
}
