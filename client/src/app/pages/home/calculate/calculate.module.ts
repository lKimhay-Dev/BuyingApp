import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatePageRoutingModule } from 'src/app/pages/home/calculate/calculate-routing.module';

import { CalculatePage } from 'src/app/pages/home/calculate/calculate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatePageRoutingModule
  ],
  declarations: [CalculatePage]
})
export class CalculatePageModule {}
