import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDeliverAreaPageRoutingModule } from './modal-deliver-area-routing.module';

import { ModalDeliverAreaPage } from './modal-deliver-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDeliverAreaPageRoutingModule
  ],
  declarations: [ModalDeliverAreaPage]
})
export class ModalDeliverAreaPageModule {}
