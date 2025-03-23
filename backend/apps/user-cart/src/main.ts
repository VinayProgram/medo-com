import { NestFactory } from '@nestjs/core';
import { UserCartModule } from './user-cart.module';

async function bootstrap() {
  const app = await NestFactory.create(UserCartModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
