import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangePurchaseFeePage } from 'src/app/pages/menu/change-purchase-fee/change-purchase-fee.page';

const routes: Routes = [
  {
    path: '',
    component: ChangePurchaseFeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangePurchaseFeePageRoutingModule {}
