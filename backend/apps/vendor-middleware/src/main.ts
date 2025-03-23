import { NestFactory } from '@nestjs/core';
import { VendorMiddlewareModule } from './vendor-middleware.module';

async function bootstrap() {
  const app = await NestFactory.create(VendorMiddlewareModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
