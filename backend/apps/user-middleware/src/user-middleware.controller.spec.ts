import { Test, TestingModule } from '@nestjs/testing';
import { UserMiddlewareController } from './user-middleware.controller';
import { UserMiddlewareService } from './user-middleware.service';

describe('UserMiddlewareController', () => {
  let userMiddlewareController: UserMiddlewareController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserMiddlewareController],
      providers: [UserMiddlewareService],
    }).compile();

    userMiddlewareController = app.get<UserMiddlewareController>(UserMiddlewareController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userMiddlewareController.getHello()).toBe('Hello World!');
    });
  });
});
