import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalTailerPageRoutingModule } from './modal-tailer-routing.module';

import { ModalTailerPage } from './modal-tailer.page';

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
