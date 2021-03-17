import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyingBasicFeePageRoutingModule } from 'src/app/pages/home/buying-basic-fee/buying-basic-fee-routing.module';

import { BuyingBasicFeePage } from 'src/app/pages/home/buying-basic-fee/buying-basic-fee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BuyingBasicFeePageRoutingModule
  ],
  declarations: [BuyingBasicFeePage]
})
export class BuyingBasicFeePageModule {}
