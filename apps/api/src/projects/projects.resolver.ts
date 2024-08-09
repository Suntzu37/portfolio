import { Resolver, Query } from '@nestjs/graphql'
import { ProjectsService } from './projects.service'
import { Project } from './projects.model'

@Resolver()
export class ProjectsResolver {
    constructor(private readonly projectsService: ProjectsService) {}

    @Query(() => [Project])
    public async projects(): Promise<Project[]> {
        return await this.projectsService.getAll()
    }
}
