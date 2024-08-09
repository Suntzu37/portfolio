import { Module } from '@nestjs/common'
import { ProjectsService } from './projects.service'
import { ProjectsResolver } from './projects.resolver'
import { PrismaModule } from '@/prisma/prisma.module'

@Module({
    imports: [PrismaModule],
    providers: [ProjectsService, ProjectsResolver]
})
export class ProjectsModule {}
