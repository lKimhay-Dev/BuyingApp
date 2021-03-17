import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPagePageRoutingModule } from 'src/app/pages/menu/menu-page-routing.module';

import { MenuPage } from 'src/app/pages/menu/menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPagePageRoutingModule,
  ],
  declarations: [MenuPage]
})
export class MenuPagePageModule {}
