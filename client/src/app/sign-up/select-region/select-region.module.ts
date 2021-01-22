import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRegionPageRoutingModule } from './select-region-routing.module';

import { SelectRegionPage } from './select-region.page';

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
