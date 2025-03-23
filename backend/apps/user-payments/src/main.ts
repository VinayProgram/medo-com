import { NestFactory } from '@nestjs/core';
import { UserPaymentsModule } from './user-payments.module';

async function bootstrap() {
  const app = await NestFactory.create(UserPaymentsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
