import { Controller, Get } from '@nestjs/common';
import { UserMiddlewareService } from './user-middleware.service';

@Controller()
export class UserMiddlewareController {
  constructor(private readonly userMiddlewareService: UserMiddlewareService) {}

  @Get()
  getHello(): string {
    return this.userMiddlewareService.getHello();
  }
}
