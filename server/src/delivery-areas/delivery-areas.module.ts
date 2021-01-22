import { Module } from '@nestjs/common';
import { DeliveryAreasService } from './delivery-areas.service';
import { DeliveryAreasController } from './delivery-areas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryAreaSchema } from './entities/delivery-area.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'DeliveryArea', schema: DeliveryAreaSchema }])],
  controllers: [DeliveryAreasController],
  providers: [DeliveryAreasService]
})
export class DeliveryAreasModule {}
