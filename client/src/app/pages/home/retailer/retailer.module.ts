import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetailerPageRoutingModule } from 'src/app/pages/home/retailer/retailer-routing.module';

import { RetailerPage } from 'src/app/pages/home/retailer/retailer.page';
import { PhonePipe } from 'src/app/pipes/phone-number/phone.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RetailerPageRoutingModule

    ],
    declarations: [RetailerPage, PhonePipe, RetailerPage]
})
export class RetailerPageModule {
}
