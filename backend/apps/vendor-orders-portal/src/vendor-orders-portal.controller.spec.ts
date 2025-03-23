import { Test, TestingModule } from '@nestjs/testing';
import { VendorOrdersPortalController } from './vendor-orders-portal.controller';
import { VendorOrdersPortalService } from './vendor-orders-portal.service';

describe('VendorOrdersPortalController', () => {
  let vendorOrdersPortalController: VendorOrdersPortalController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VendorOrdersPortalController],
      providers: [VendorOrdersPortalService],
    }).compile();

    vendorOrdersPortalController = app.get<VendorOrdersPortalController>(VendorOrdersPortalController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vendorOrdersPortalController.getHello()).toBe('Hello World!');
    });
  });
});
