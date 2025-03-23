import { Test, TestingModule } from '@nestjs/testing';
import { UserLoginController } from './user-login.controller';
import { UserLoginService } from './user-login.service';

describe('UserLoginController', () => {
  let userLoginController: UserLoginController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserLoginController],
      providers: [UserLoginService],
    }).compile();

    userLoginController = app.get<UserLoginController>(UserLoginController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(userLoginController.getHello()).toBe('Hello World!');
    });
  });
});
