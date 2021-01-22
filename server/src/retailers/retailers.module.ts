import { Module } from '@nestjs/common';
import { RetailersService } from './retailers.service';
import { RetailersController } from './retailers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RetailerSchema } from './entities/retailer.entity';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Retailer', schema: RetailerSchema }])],
  controllers: [RetailersController],
  providers: [RetailersService]
})
export class RetailersModule {}
