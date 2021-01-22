import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailerPage } from './retailer.page';

const routes: Routes = [
  {
    path: '',
    component: RetailerPage
  },
  {
    path: 'modal-tailer',
    loadChildren: () => import('./modal-tailer/modal-tailer.module').then( m => m.ModalTailerPageModule)
  }
  // ,
  // {
  //   path: 'register-retailer',
  //   loadChildren: () => import('./register-retailer/register-retailer.module').then( m => m.RegisterRetailerPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetailerPageRoutingModule {}
