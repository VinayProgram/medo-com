import { NestFactory } from '@nestjs/core';
import { VendorLoginModule } from './vendor-login.module';

async function bootstrap() {
  const app = await NestFactory.create(VendorLoginModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
