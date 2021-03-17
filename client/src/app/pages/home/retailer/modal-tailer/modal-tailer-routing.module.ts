import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalTailerPage } from 'src/app/pages/home/retailer/modal-tailer/modal-tailer.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTailerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalTailerPageRoutingModule {}
