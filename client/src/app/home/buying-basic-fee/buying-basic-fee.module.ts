import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyingBasicFeePageRoutingModule } from './buying-basic-fee-routing.module';

import { BuyingBasicFeePage } from './buying-basic-fee.page';

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
