import { Test, TestingModule } from '@nestjs/testing';
import { BuyingAreasService } from './buying-areas.service';

describe('BuyingAreasService', () => {
  let service: BuyingAreasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuyingAreasService],
    }).compile();

    service = module.get<BuyingAreasService>(BuyingAreasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
