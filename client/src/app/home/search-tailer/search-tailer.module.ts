import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTailerPageRoutingModule } from './search-tailer-routing.module';

import { SearchTailerPage } from './search-tailer.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SearchTailerPageRoutingModule
  ],
  declarations: [SearchTailerPage]
})
export class SearchTailerPageModule {}
