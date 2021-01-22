import { Test, TestingModule } from '@nestjs/testing';
import { BuyingBasicFeesService } from './buying-basic-fees.service';

describe('BuyingBasicFeesService', () => {
  let service: BuyingBasicFeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyingBasicFeesService],
    }).compile();

    service = module.get<BuyingBasicFeesService>(BuyingBasicFeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
