import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRegionPageRoutingModule } from 'src/app/pages/sign-up/select-region/select-region-routing.module';

import { SelectRegionPage } from 'src/app/pages/sign-up/select-region/select-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectRegionPageRoutingModule
  ],
  declarations: [SelectRegionPage]
})
export class SelectRegionPageModule {}
