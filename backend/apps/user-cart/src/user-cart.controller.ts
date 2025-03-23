import { Controller, Get } from '@nestjs/common';
import { UserCartService } from './user-cart.service';

@Controller()
export class UserCartController {
  constructor(private readonly userCartService: UserCartService) {}

  @Get()
  getHello(): string {
    return this.userCartService.getHello();
  }
}
