import { Controller, Get } from '@nestjs/common';
import { VendorLoginService } from './vendor-login.service';

@Controller()
export class VendorLoginController {
  constructor(private readonly vendorLoginService: VendorLoginService) {}

  @Get()
  getHello(): string {
    return this.vendorLoginService.getHello();
  }
}
