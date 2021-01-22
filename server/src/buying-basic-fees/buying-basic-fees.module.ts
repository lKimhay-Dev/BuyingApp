import { Module } from '@nestjs/common';
import { BuyingBasicFeesService } from './buying-basic-fees.service';
import { BuyingBasicFeesController } from './buying-basic-fees.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BuyingBasicFeeSchema } from './entities/buying-basic-fee.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BuyingBasicFee', schema: BuyingBasicFeeSchema }])],
  controllers: [BuyingBasicFeesController],
  providers: [BuyingBasicFeesService]
})
export class BuyingBasicFeesModule {}
