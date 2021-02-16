import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailerPageRoutingModule } from './retailer-routing.module';

import { RetailerPage } from './retailer.page';
import { PhonePipePipe } from '../../Pipe/phoneNumber/phone-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetailerPageRoutingModule
    
  ],
  declarations: [RetailerPage,PhonePipePipe]
})
export class RetailerPageModule {}
