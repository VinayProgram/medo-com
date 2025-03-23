import { Injectable } from '@nestjs/common';

@Injectable()
export class UserOtherServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
