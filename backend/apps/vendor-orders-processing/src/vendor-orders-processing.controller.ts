import { Controller, Get } from '@nestjs/common';
import { VendorOrdersProcessingService } from './vendor-orders-processing.service';

@Controller()
export class VendorOrdersProcessingController {
  constructor(private readonly vendorOrdersProcessingService: VendorOrdersProcessingService) {}

  @Get()
  getHello(): string {
    return this.vendorOrdersProcessingService.getHello();
  }
}
