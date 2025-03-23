import { NestFactory } from '@nestjs/core';
import { UserOtherServicesModule } from './user-other-services.module';

async function bootstrap() {
  const app = await NestFactory.create(UserOtherServicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
