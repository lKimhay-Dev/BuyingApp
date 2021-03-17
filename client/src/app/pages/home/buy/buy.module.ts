import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyPageRoutingModule } from 'src/app/pages/home/buy/buy-routing.module';

import { BuyPage } from 'src/app/pages/home/buy/buy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyPageRoutingModule
  ],
  declarations: [BuyPage]
})
export class BuyPageModule {}
