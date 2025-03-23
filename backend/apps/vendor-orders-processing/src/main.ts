import { NestFactory } from '@nestjs/core';
import { VendorOrdersProcessingModule } from './vendor-orders-processing.module';

async function bootstrap() {
  const app = await NestFactory.create(VendorOrdersProcessingModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
