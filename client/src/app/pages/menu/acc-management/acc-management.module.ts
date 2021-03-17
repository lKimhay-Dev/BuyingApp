import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccManagementPageRoutingModule } from 'src/app/pages/menu/acc-management/acc-management-routing.module';

import { AccManagementPage } from 'src/app/pages/menu/acc-management/acc-management.page';

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
