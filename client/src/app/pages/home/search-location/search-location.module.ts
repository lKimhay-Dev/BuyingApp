import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchLocationPageRoutingModule } from 'src/app/pages/home/search-location/search-location-routing.module';

import { SearchLocationPage } from 'src/app/pages/home/search-location/search-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SearchLocationPageRoutingModule
  ],
  declarations: [SearchLocationPage]
})
export class SearchLocationPageModule {}
