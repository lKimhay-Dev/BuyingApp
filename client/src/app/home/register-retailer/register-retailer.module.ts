import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterRetailerPageRoutingModule } from './register-retailer-routing.module';

import { RegisterRetailerPage } from './register-retailer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterRetailerPageRoutingModule
  ],
  declarations: [RegisterRetailerPage]
})
export class RegisterRetailerPageModule {}
