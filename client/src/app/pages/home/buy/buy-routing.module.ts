import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyPage } from 'src/app/pages/home/buy/buy.page';

const routes: Routes = [
  {
    path: '',
    component: BuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyPageRoutingModule {}
