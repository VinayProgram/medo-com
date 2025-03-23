import { Controller, Get } from '@nestjs/common';
import { UserOrdersService } from './user-orders.service';

@Controller()
export class UserOrdersController {
  constructor(private readonly userOrdersService: UserOrdersService) {}

  @Get()
  getHello(): string {
    return this.userOrdersService.getHello();
  }
}
