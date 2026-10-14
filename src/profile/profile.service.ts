import { Injectable } from "@nestjs/common";
import { PrismaService } from "../common/prisma/prisma.service.js";

@Injectable()
export class ProfileService {
    private readonly profileInclude = {
        links: { orderBy: { sortOrder: 'asc' as const } },
        skills: { orderBy: { sortOrder: 'asc' as const } },
        experiences: { 
            orderBy: { sortOrder: 'asc' as const },
            include: { company: true }
        },
        projects: { orderBy: { sortOrder: 'asc' as const } },
    };
    
    constructor(private readonly prisma: PrismaService) {}

    async findOne(args?: { id?: string, slug?: string }) {
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

    async findAll(args?: { limit?: number, offset?: number }) {
        return this.prisma.profile.findMany({
            orderBy: { createdAt: 'desc' as const },
            include: this.profileInclude,
            ...(args?.limit && { take: args.limit }),
            ...(args?.offset && { skip: args.offset }),
        });
    }
}
