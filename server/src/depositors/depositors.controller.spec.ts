import { Test, TestingModule } from '@nestjs/testing';
import { DepositorsController } from './depositors.controller';
import { DepositorsService } from './depositors.service';

describe('DepositorsController', () => {
  let controller: DepositorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepositorsController],
      providers: [DepositorsService],
    }).compile();

    controller = module.get<DepositorsController>(DepositorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
