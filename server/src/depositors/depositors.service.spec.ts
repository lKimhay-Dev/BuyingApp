import { Test, TestingModule } from '@nestjs/testing';
import { DepositorsService } from './depositors.service';

describe('DepositorsService', () => {
  let service: DepositorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepositorsService],
    }).compile();

    service = module.get<DepositorsService>(DepositorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
