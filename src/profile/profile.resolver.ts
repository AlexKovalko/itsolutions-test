import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class ProfileResolver {
    @Query(() => String)
    hello(): string {
        return 'Hello World';
    }
}
