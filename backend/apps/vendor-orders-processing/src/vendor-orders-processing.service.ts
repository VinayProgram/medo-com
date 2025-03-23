import { Injectable } from '@nestjs/common';

@Injectable()
export class VendorOrdersProcessingService {
  getHello(): string {
    return 'Hello World!';
  }
}
