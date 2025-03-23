import { Test, TestingModule } from '@nestjs/testing';
import { UserOrdersController } from './user-orders.controller';
import { UserOrdersService } from './user-orders.service';

describe('UserOrdersController', () => {
  let userOrdersController: UserOrdersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserOrdersController],
      providers: [UserOrdersService],
    }).compile();

    userOrdersController = app.get<UserOrdersController>(UserOrdersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userOrdersController.getHello()).toBe('Hello World!');
    });
  });
});
