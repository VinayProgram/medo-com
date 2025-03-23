import { Test, TestingModule } from '@nestjs/testing';
import { VendorMiddlewareController } from './vendor-middleware.controller';
import { VendorMiddlewareService } from './vendor-middleware.service';

describe('VendorMiddlewareController', () => {
  let vendorMiddlewareController: VendorMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VendorMiddlewareController],
      providers: [VendorMiddlewareService],
    }).compile();

    vendorMiddlewareController = app.get<VendorMiddlewareController>(VendorMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vendorMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
