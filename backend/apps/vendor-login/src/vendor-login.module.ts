import { Module } from '@nestjs/common';
import { VendorLoginController } from './vendor-login.controller';
import { VendorLoginService } from './vendor-login.service';

@Module({
  imports: [],
  controllers: [VendorLoginController],
  providers: [VendorLoginService],
})
export class VendorLoginModule {}
