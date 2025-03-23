import { Test, TestingModule } from '@nestjs/testing';
import { VendorOrdersProcessingController } from './vendor-orders-processing.controller';
import { VendorOrdersProcessingService } from './vendor-orders-processing.service';

describe('VendorOrdersProcessingController', () => {
  let vendorOrdersProcessingController: VendorOrdersProcessingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VendorOrdersProcessingController],
      providers: [VendorOrdersProcessingService],
    }).compile();

    vendorOrdersProcessingController = app.get<VendorOrdersProcessingController>(VendorOrdersProcessingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vendorOrdersProcessingController.getHello()).toBe('Hello World!');
    });
  });
});
