import { Controller, Get } from '@nestjs/common';
import { VendorMiddlewareService } from './vendor-middleware.service';

@Controller()
export class VendorMiddlewareController {
  constructor(private readonly vendorMiddlewareService: VendorMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.vendorMiddlewareService.getHello();
  }
}
