import { Injectable } from "@nestjs/common";
import { PaginationArgs } from "../common/dto/pagination.args.js";
import { PrismaService } from "../common/prisma/prisma.service.js";
import { ProfileArgs } from "./dto/profile.args.js";

@Injectable()
export class ProfileService {
    private readonly profileInclude = {
        links: { orderBy: { sortOrder: 'asc' as const } },
        skills: { orderBy: { sortOrder: 'asc' as const } },
        experience: { 
            orderBy: { sortOrder: 'asc' as const },
            include: { company: true }
        },
        projects: { orderBy: { sortOrder: 'asc' as const } },
    };
    
    constructor(private readonly prisma: PrismaService) {}

    async findOne(args: ProfileArgs) {
        if (args?.id || args?.slug) {
            return this.prisma.profile.findFirst({
                where: {
                    OR: [
                        { id: args?.id ?? undefined },
                        { slug: args?.slug ?? undefined },
                    ].filter(Boolean) as object[],
                },
                include: this.profileInclude,
            });
        }
        return this.prisma.profile.findFirst({
            orderBy: { createdAt: 'desc' as const },
            include: this.profileInclude,
        });
    }

    async findAll(args?: PaginationArgs) {
        return this.prisma.profile.findMany({
            orderBy: { createdAt: 'desc' as const },
            include: this.profileInclude,
            ...(args?.limit != null && { take: args.limit }),
            ...(args?.offset != null && { skip: args.offset }),
        });
    }
}
