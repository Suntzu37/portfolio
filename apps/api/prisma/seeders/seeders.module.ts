import { Module } from '@nestjs/common'
import { PrismaModule } from '@/prisma/prisma.module'
import { SeedersService } from './seeders.service'

@Module({
    imports: [PrismaModule],
    providers: [SeedersService]
})
export class SeedersModule {}
