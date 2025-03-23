import { NestFactory } from '@nestjs/core';
import { UserOrdersModule } from './user-orders.module';

async function bootstrap() {
  const app = await NestFactory.create(UserOrdersModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
