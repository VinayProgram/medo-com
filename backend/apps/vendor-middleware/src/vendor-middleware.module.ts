import { Module } from '@nestjs/common';
import { VendorMiddlewareController } from './vendor-middleware.controller';
import { VendorMiddlewareService } from './vendor-middleware.service';

@Module({
  imports: [],
  controllers: [VendorMiddlewareController],
  providers: [VendorMiddlewareService],
})
export class VendorMiddlewareModule {}
