import { Module } from '@nestjs/common';
import { VendorOrdersPortalController } from './vendor-orders-portal.controller';
import { VendorOrdersPortalService } from './vendor-orders-portal.service';

@Module({
  imports: [],
  controllers: [VendorOrdersPortalController],
  providers: [VendorOrdersPortalService],
})
export class VendorOrdersPortalModule {}
