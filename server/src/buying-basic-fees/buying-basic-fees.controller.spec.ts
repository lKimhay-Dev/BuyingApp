import { Test, TestingModule } from '@nestjs/testing';
import { BuyingBasicFeesController } from './buying-basic-fees.controller';
import { BuyingBasicFeesService } from './buying-basic-fees.service';

describe('BuyingBasicFeesController', () => {
  let controller: BuyingBasicFeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyingBasicFeesController],
      providers: [BuyingBasicFeesService],
    }).compile();

    controller = module.get<BuyingBasicFeesController>(BuyingBasicFeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
