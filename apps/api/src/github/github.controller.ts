import { Controller, Get } from '@nestjs/common'
import { GithubService } from './github.service'
import { type RepositoryDto } from './github.dto'

@Controller('github')
export class GithubController {
    constructor(private readonly githubService: GithubService) {}

    @Get('repos')
    public async getRepositories(): Promise<RepositoryDto[]> {
        return await this.githubService.getGithubRepos()
    }
}
