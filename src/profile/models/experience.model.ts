import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => String)
  id: string;

  @Field(() => String)
  position: string;

  @Field(() => Date)
  startDate: Date;

  @Field(() => Date, { nullable: true })
  endDate?: Date | null;

  @Field(() => [String])
  achievements: string[];

  @Field(() => Number)
  sortOrder: number = 0;

  @Field(() => String)
  company: string;

  @Field(() => String)
  profileId: string;

  @Field(() => Date)
  createdAt: Date = new Date();

  @Field(() => Date)
  updatedAt: Date = new Date();
}
