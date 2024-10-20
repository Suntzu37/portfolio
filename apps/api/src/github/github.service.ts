import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { HttpService } from '@nestjs/axios'
import { type RepositoryDto } from './github.dto'
import { type AxiosError } from 'axios'

@Injectable()
export class GithubService {
    private readonly url: string
    private readonly token: string

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) {
        this.url = this.configService.get<string>('GITHUB_URL') ?? ''
        this.token = this.configService.get<string>('GITHUB_TOKEN') ?? ''
    }

    public async getGithubRepos(): Promise<RepositoryDto[]> {
        return await this.httpService.axiosRef
            .get(this.url, {
                headers: {
                    Authorization: `Bearer ${this.token}`
                }
            })
            .then((res) => {
                return res.data.map((repo: RepositoryDto) => ({
                    id: repo.id,
                    name: repo.name,
                    description: repo.description
                }))
            })
            .catch((error: AxiosError) => {
                const message = error.message ?? 'Unknown Error'
                const statusCode =
                    error.response?.status ?? HttpStatus.INTERNAL_SERVER_ERROR

                throw new HttpException(message, statusCode)
            })
    }
}
