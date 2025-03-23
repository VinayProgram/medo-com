import { Controller, Get } from '@nestjs/common';
import { VendorOrdersPortalService } from './vendor-orders-portal.service';

@Controller()
export class VendorOrdersPortalController {
  constructor(private readonly vendorOrdersPortalService: VendorOrdersPortalService) {}

  @Get()
  getHello(): string {
    return this.vendorOrdersPortalService.getHello();
  }
}
