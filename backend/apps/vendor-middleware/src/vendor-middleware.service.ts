import { Injectable } from '@nestjs/common';

@Injectable()
export class VendorMiddlewareService {
  getHello(): string {
    return 'Hello World!';
  }
}
