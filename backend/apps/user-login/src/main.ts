import { NestFactory } from '@nestjs/core';
import { UserLoginModule } from './user-login.module';

async function bootstrap() {
  const app = await NestFactory.create(UserLoginModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
