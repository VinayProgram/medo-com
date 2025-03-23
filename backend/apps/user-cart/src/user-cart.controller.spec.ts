import { Test, TestingModule } from '@nestjs/testing';
import { UserCartController } from './user-cart.controller';
import { UserCartService } from './user-cart.service';

describe('UserCartController', () => {
  let userCartController: UserCartController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserCartController],
      providers: [UserCartService],
    }).compile();

    userCartController = app.get<UserCartController>(UserCartController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userCartController.getHello()).toBe('Hello World!');
    });
  });
});
