import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPaymentsService {
  getHello(): string {
    return 'Hello World!';
  }
}
