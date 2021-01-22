import { Test, TestingModule } from '@nestjs/testing';
import { BuyingAreasController } from './buying-areas.controller';
import { BuyingAreasService } from './buying-areas.service';

describe('BuyingAreasController', () => {
  let controller: BuyingAreasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuyingAreasController],
      providers: [BuyingAreasService],
    }).compile();

    controller = module.get<BuyingAreasController>(BuyingAreasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
