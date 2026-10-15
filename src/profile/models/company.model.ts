import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Company {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  description?: string | null;

  @Field(() => String, { nullable: true })
  url?: string | null;

  @Field(() => Number)
  sortOrder: number = 0;

  @Field(() => Date)
  createdAt: Date = new Date();

  @Field(() => Date)
  updatedAt: Date = new Date();
}
