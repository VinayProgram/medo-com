import { Test, TestingModule } from '@nestjs/testing';
import { UserPaymentsController } from './user-payments.controller';
import { UserPaymentsService } from './user-payments.service';

describe('UserPaymentsController', () => {
  let userPaymentsController: UserPaymentsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserPaymentsController],
      providers: [UserPaymentsService],
    }).compile();

    userPaymentsController = app.get<UserPaymentsController>(UserPaymentsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userPaymentsController.getHello()).toBe('Hello World!');
    });
  });
});
