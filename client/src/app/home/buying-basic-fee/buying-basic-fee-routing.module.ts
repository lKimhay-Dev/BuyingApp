import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyingBasicFeePage } from './buying-basic-fee.page';

const routes: Routes = [
  {
    path: '',
    component: BuyingBasicFeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyingBasicFeePageRoutingModule {}
