import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDeliverAreaPage } from 'src/app/pages/sign-up/select-region/modal-deliver-area/modal-deliver-area.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDeliverAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDeliverAreaPageRoutingModule {}
