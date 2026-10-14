import { Field, ObjectType } from "@nestjs/graphql";
import { Experience } from "./experience.model.js";

@ObjectType()
export class Company {
    @Field(() => String)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    description?: string;

    @Field(() => String)
    url?: string;

    @Field(() => Number)
    sortOrder: number = 0;

    @Field(() => Date)
    createdAt: Date = new Date();

    @Field(() => Date)
    updatedAt: Date = new Date();
}
