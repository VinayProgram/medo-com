import { Test, TestingModule } from '@nestjs/testing';
import { VendorsController } from './vendors.controller';
import { VendorsService } from './vendors.service';

describe('VendorsController', () => {
  let vendorsController: VendorsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VendorsController],
      providers: [VendorsService],
    }).compile();

    vendorsController = app.get<VendorsController>(VendorsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vendorsController.getHello()).toBe('Hello World!');
    });
  });
});
