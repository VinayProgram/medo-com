import { Module } from '@nestjs/common';
import { UserCartController } from './user-cart.controller';
import { UserCartService } from './user-cart.service';

@Module({
  imports: [],
  controllers: [UserCartController],
  providers: [UserCartService],
})
export class UserCartModule {}
