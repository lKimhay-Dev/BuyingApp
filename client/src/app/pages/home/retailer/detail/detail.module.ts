import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from 'src/app/pages/home/retailer/detail/detail-routing.module';

import { DetailPage } from 'src/app/pages/home/retailer/detail/detail.page';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    CalendarModule
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
