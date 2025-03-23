import { Test, TestingModule } from '@nestjs/testing';
import { UserOtherServicesController } from './user-other-services.controller';
import { UserOtherServicesService } from './user-other-services.service';

describe('UserOtherServicesController', () => {
  let userOtherServicesController: UserOtherServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserOtherServicesController],
      providers: [UserOtherServicesService],
    }).compile();

    userOtherServicesController = app.get<UserOtherServicesController>(UserOtherServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userOtherServicesController.getHello()).toBe('Hello World!');
    });
  });
});
