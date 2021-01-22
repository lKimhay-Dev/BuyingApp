import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTailerPageRoutingModule } from './search-tailer-routing.module';

import { SearchTailerPage } from './search-tailer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTailerPageRoutingModule
  ],
  declarations: [SearchTailerPage]
})
export class SearchTailerPageModule {}
