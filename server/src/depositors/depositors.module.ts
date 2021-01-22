import { Module } from '@nestjs/common';
import { DepositorsService } from './depositors.service';
import { DepositorsController } from './depositors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DepositorSchema, Depositor } from './entities/depositor.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Depositor.name, schema: DepositorSchema }])],
  controllers: [DepositorsController],
  providers: [DepositorsService]
})
export class DepositorsModule {}
