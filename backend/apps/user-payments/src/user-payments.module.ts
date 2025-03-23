import { Module } from '@nestjs/common';
import { UserPaymentsController } from './user-payments.controller';
import { UserPaymentsService } from './user-payments.service';

@Module({
  imports: [],
  controllers: [UserPaymentsController],
  providers: [UserPaymentsService],
})
export class UserPaymentsModule {}
