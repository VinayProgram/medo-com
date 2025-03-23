import { Test, TestingModule } from '@nestjs/testing';
import { VendorRatingsController } from './vendor-ratings.controller';
import { VendorRatingsService } from './vendor-ratings.service';

describe('VendorRatingsController', () => {
  let vendorRatingsController: VendorRatingsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VendorRatingsController],
      providers: [VendorRatingsService],
    }).compile();

    vendorRatingsController = app.get<VendorRatingsController>(VendorRatingsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vendorRatingsController.getHello()).toBe('Hello World!');
    });
  });
});
