import { Test, TestingModule } from '@nestjs/testing';
import { CtasService } from './ctas.service';

describe('CtasService', () => {
  let service: CtasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CtasService],
    }).compile();

    service = module.get<CtasService>(CtasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
