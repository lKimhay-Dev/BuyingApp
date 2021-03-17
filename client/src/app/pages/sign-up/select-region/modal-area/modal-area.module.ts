import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAreaPageRoutingModule } from 'src/app/pages/sign-up/select-region/modal-area/modal-area-routing.module';

import { ModalAreaPage } from 'src/app/pages/sign-up/select-region/modal-area/modal-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAreaPageRoutingModule
  ],
  declarations: [ModalAreaPage]
})
export class ModalAreaPageModule {}
