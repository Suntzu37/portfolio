import { NestFactory } from '@nestjs/core'
import { SeedersModule } from './seeders.module'
import { SeedersService } from './seeders.service'

async function bootstrap(): Promise<void> {
    const appContext = await NestFactory.createApplicationContext(SeedersModule)
    const seeder = appContext.get(SeedersService)
    await seeder.seed()
    await appContext.close()
}

bootstrap().catch((e) => {
    console.error(e)
    process.exit(1)
})
