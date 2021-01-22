import { Module } from '@nestjs/common';
import { BuyingAreasService } from './buying-areas.service';
import { BuyingAreasController } from './buying-areas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BuyingAreaSchema } from './entities/buying-area.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BuyingArea', schema: BuyingAreaSchema }])],
  controllers: [BuyingAreasController],
  providers: [BuyingAreasService]
})
export class BuyingAreasModule {}
