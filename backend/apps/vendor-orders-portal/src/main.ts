import { NestFactory } from '@nestjs/core';
import { VendorOrdersPortalModule } from './vendor-orders-portal.module';

async function bootstrap() {
  const app = await NestFactory.create(VendorOrdersPortalModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
