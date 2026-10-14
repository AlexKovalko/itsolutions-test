import { Args, Query, Resolver } from "@nestjs/graphql";
import { ProfileService } from "./profile.service.js";
import { Profile } from "./models/profile.model.js";

@Resolver()
export class ProfileResolver {

    constructor(private readonly profileService: ProfileService) {}

    @Query(() => Profile, { nullable: true })
    profile(
        @Args('id', { type: () => String, nullable: true }) id?: string,
        @Args('slug', { type: () => String, nullable: true }) slug?: string,
    ) {
        return this.profileService.findOne({ id, slug });
    }

    @Query(() => [Profile])
    profiles(
        @Args('limit', { type: () => Number, nullable: true }) limit?: number,
        @Args('offset', { type: () => Number, nullable: true }) offset?: number,
    ) {
        return this.profileService.findAll({ limit, offset });
    }
}
