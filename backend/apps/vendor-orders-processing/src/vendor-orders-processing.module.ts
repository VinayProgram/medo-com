import { Module } from '@nestjs/common';
import { VendorOrdersProcessingController } from './vendor-orders-processing.controller';
import { VendorOrdersProcessingService } from './vendor-orders-processing.service';

@Module({
  imports: [],
  controllers: [VendorOrdersProcessingController],
  providers: [VendorOrdersProcessingService],
})
export class VendorOrdersProcessingModule {}
