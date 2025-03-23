import { NestFactory } from '@nestjs/core';
import { VendorRatingsModule } from './vendor-ratings.module';

async function bootstrap() {
  const app = await NestFactory.create(VendorRatingsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
