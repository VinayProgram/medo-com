import { Controller, Get } from '@nestjs/common';
import { VendorRatingsService } from './vendor-ratings.service';

@Controller()
export class VendorRatingsController {
  constructor(private readonly vendorRatingsService: VendorRatingsService) {}

  @Get()
  getHello(): string {
    return this.vendorRatingsService.getHello();
  }
}
