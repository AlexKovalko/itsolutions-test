import { Args, Query, Resolver } from '@nestjs/graphql';
import { PaginationArgs } from '../common/dto/pagination.args.js';
import { ProfileService } from './profile.service.js';
import { Profile } from './models/profile.model.js';
import { ProfileArgs } from './dto/profile.args.js';

@Resolver()
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile, { nullable: true })
  profile(@Args() args: ProfileArgs) {
    return this.profileService.findOne(args);
  }

  @Query(() => [Profile])
  profiles(@Args() args: PaginationArgs) {
    return this.profileService.findAll(args);
  }
}
