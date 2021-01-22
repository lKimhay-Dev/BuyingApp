import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRegionPage } from './select-region.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRegionPage
  },
  {
    path: 'modal-area',
    loadChildren: () => import('./modal-area/modal-area.module').then( m => m.ModalAreaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRegionPageRoutingModule {}
