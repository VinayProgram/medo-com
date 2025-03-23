import { Test, TestingModule } from '@nestjs/testing';
import { VendorLoginController } from './vendor-login.controller';
import { VendorLoginService } from './vendor-login.service';

describe('VendorLoginController', () => {
  let vendorLoginController: VendorLoginController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VendorLoginController],
      providers: [VendorLoginService],
    }).compile();

    vendorLoginController = app.get<VendorLoginController>(VendorLoginController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vendorLoginController.getHello()).toBe('Hello World!');
    });
  });
});
