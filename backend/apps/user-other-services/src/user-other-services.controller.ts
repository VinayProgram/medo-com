import { Controller, Get } from '@nestjs/common';
import { UserOtherServicesService } from './user-other-services.service';

@Controller()
export class UserOtherServicesController {
  constructor(private readonly userOtherServicesService: UserOtherServicesService) {}

  @Get()
  getHello(): string {
    return this.userOtherServicesService.getHello();
  }
}
