import { Controller, Get } from '@nestjs/common';
import { UserLoginService } from './user-login.service';

@Controller()
export class UserLoginController {
  constructor(private readonly userLoginService: UserLoginService) {}

  @Get()
  getHello(): string {
    return this.userLoginService.getHello();
  }
}
