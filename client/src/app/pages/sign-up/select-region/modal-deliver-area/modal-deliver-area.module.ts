import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// tslint:disable-next-line:max-line-length
import { ModalDeliverAreaPageRoutingModule } from 'src/app/pages/sign-up/select-region/modal-deliver-area/modal-deliver-area-routing.module';

import { ModalDeliverAreaPage } from 'src/app/pages/sign-up/select-region/modal-deliver-area/modal-deliver-area.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ModalDeliverAreaPageRoutingModule
    ],
    declarations: [ModalDeliverAreaPage]
})
export class ModalDeliverAreaPageModule {
}
