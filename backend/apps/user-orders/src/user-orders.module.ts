import { Module } from '@nestjs/common';
import { UserOrdersController } from './user-orders.controller';
import { UserOrdersService } from './user-orders.service';

@Module({
  imports: [],
  controllers: [UserOrdersController],
  providers: [UserOrdersService],
})
export class UserOrdersModule {}
