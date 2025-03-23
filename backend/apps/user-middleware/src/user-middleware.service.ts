import { Injectable } from '@nestjs/common';

@Injectable()
export class UserMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
