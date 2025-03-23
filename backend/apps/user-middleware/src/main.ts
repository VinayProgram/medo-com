import { NestFactory } from '@nestjs/core';
import { UserMiddlewareModule } from './user-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(UserMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
