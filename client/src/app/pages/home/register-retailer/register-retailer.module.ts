import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from 'br-mask';
import { IonicModule } from '@ionic/angular';

import { RegisterRetailerPageRoutingModule } from 'src/app/pages/home/register-retailer/register-retailer-routing.module';

import { RegisterRetailerPage } from 'src/app/pages/home/register-retailer/register-retailer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegisterRetailerPageRoutingModule,
    BrMaskerModule,
  ],
  declarations: [RegisterRetailerPage]
})
export class RegisterRetailerPageModule {}
