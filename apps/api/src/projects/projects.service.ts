import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'
import { type Project } from './projects.model'

@Injectable()
export class ProjectsService {
    constructor(private readonly prismaService: PrismaService) {}

    public async getAll(): Promise<Project[]> {
        return await this.prismaService.project.findMany()
    }
}
