import { Module } from '@nestjs/common';
import { UserMiddlewareController } from './user-middleware.controller';
import { UserMiddlewareService } from './user-middleware.service';

@Module({
  imports: [],
  controllers: [UserMiddlewareController],
  providers: [UserMiddlewareService],
})
export class UserMiddlewareModule {}
