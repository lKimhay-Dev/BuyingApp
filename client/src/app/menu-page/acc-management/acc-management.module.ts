import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccManagementPageRoutingModule } from './acc-management-routing.module';

import { AccManagementPage } from './acc-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccManagementPageRoutingModule
  ],
  declarations: [AccManagementPage]
})
export class AccManagementPageModule {}
