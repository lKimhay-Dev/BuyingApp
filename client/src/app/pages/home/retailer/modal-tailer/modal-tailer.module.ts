import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTailerPageRoutingModule } from 'src/app/pages/home/retailer/modal-tailer/modal-tailer-routing.module';

import { ModalTailerPage } from 'src/app/pages/home/retailer/modal-tailer/modal-tailer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalTailerPageRoutingModule
  ],
  declarations: [ModalTailerPage]
})
export class ModalTailerPageModule {}
