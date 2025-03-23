import { Module } from '@nestjs/common';
import { VendorRatingsController } from './vendor-ratings.controller';
import { VendorRatingsService } from './vendor-ratings.service';

@Module({
  imports: [],
  controllers: [VendorRatingsController],
  providers: [VendorRatingsService],
})
export class VendorRatingsModule {}
