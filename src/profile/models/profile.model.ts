import { Field, ObjectType } from "@nestjs/graphql";
import { Skill } from "./skill.model.js";
import { Link } from "./link.model.js";
import { Project } from "./project.model.js";
import { Experience } from "./experience.model.js";

@ObjectType()
export class Profile {
    @Field(() => String)
    id: string;

    @Field(() => String)
    slug: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    description: string;

    @Field(() => [Link])
    links: Link[];

    @Field(() => [Skill])
    skills: Skill[];
    
    @Field(() => [Experience])
    experiences: Experience[];

    @Field(() => [Project])
    projects: Project[];

    @Field(() => Date)
    createdAt: Date = new Date();

    @Field(() => Date)
    updatedAt: Date = new Date();
}
