import { Module } from '@nestjs/common';
import { UserLoginController } from './user-login.controller';
import { UserLoginService } from './user-login.service';

@Module({
  imports: [],
  controllers: [UserLoginController],
  providers: [UserLoginService],
})
export class UserLoginModule {}
