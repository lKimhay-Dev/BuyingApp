import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerPage } from 'src/app/pages/home/retailer/retailer.page';

const routes: Routes = [
  {
    path: '',
    component: RetailerPage
  },
  {
    path: 'modal-tailer',
    loadChildren: () => import('src/app/pages/home/retailer/modal-tailer/modal-tailer.module').then(m => m.ModalTailerPageModule)
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RetailerPageRoutingModule {}
