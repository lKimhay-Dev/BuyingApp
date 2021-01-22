import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangePurchaseFeePageRoutingModule } from './change-purchase-fee-routing.module';

import { ChangePurchaseFeePage } from './change-purchase-fee.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    ChangePurchaseFeePageRoutingModule
  ],
  declarations: [ChangePurchaseFeePage]
})
export class ChangePurchaseFeePageModule {}
