import { Module } from '@nestjs/common';
import { UserOtherServicesController } from './user-other-services.controller';
import { UserOtherServicesService } from './user-other-services.service';

@Module({
  imports: [],
  controllers: [UserOtherServicesController],
  providers: [UserOtherServicesService],
})
export class UserOtherServicesModule {}
