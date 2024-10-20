import { IsNumber, IsString, IsOptional } from 'class-validator'

export class RepositoryDto {
    @IsNumber()
    id: number

    @IsString()
    name: string

    @IsOptional()
    @IsString()
    description?: string
}
