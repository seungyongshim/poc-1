import { Test, TestingModule } from '@nestjs/testing';
import { Poc2Controller } from './poc-2.controller';
import { Poc2Service } from './poc-2.service';

describe('Poc2Controller', () => {
  let poc2Controller: Poc2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Poc2Controller],
      providers: [Poc2Service],
    }).compile();

    poc2Controller = app.get<Poc2Controller>(Poc2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(poc2Controller.getHello()).toBe('Hello World!');
    });
  });
});
