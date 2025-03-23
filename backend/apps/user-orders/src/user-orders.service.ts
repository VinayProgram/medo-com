import { Injectable } from '@nestjs/common';

@Injectable()
export class UserOrdersService {
  getHello(): string {
    return 'Hello World!';
  }
}
