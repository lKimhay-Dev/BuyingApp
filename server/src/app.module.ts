import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BuyingBasicFeesModule } from './buying-basic-fees/buying-basic-fees.module';
import { BuyingAreasModule } from './buying-areas/buying-areas.module';
import { DeliveryAreasModule } from './delivery-areas/delivery-areas.module';
import { DepositorsModule } from './depositors/depositors.module';
import { UsersModule } from './users/users.module';
import { RetailersModule } from './retailers/retailers.module';

@Module({
  imports: [ 
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost/buyingApp'),
    BuyingBasicFeesModule,
    BuyingAreasModule,
    DeliveryAreasModule,
    DepositorsModule,
    UsersModule,
    RetailersModule 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
