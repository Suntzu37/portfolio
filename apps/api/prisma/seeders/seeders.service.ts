import { Injectable } from '@nestjs/common'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class SeedersService {
    constructor(private readonly prismaService: PrismaService) {}

    public async seed(): Promise<void> {
        const projects = [
            {
                name: 'Portfolio'
            },
            {
                name: 'E-commerce'
            },
            {
                name: 'Business Manager'
            },
            {
                name: 'Live Chat'
            }
        ]

        await this.prismaService.project.createMany({
            data: projects,
            skipDuplicates: true
        })

        console.log('Seeded database successfully!')
    }
}
