import { Controller, Get } from '@nestjs/common';
import { UserPaymentsService } from './user-payments.service';

@Controller()
export class UserPaymentsController {
  constructor(private readonly userPaymentsService: UserPaymentsService) {}

  @Get()
  getHello(): string {
    return this.userPaymentsService.getHello();
  }
}
