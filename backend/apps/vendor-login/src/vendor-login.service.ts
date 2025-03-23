import { Injectable } from '@nestjs/common';

@Injectable()
export class VendorLoginService {
  getHello(): string {
    return 'Hello World!';
  }
}
