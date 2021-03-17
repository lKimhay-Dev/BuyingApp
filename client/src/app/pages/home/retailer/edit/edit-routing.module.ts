import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPage } from 'src/app/pages/home/retailer/edit/edit.page';

const routes: Routes = [
  {
    path: '',
    component: EditPage
  },
  {
    path: 'modal',
    loadChildren: () => import('src/app/pages/home/retailer/edit/modal/modal.module').then(m => m.ModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPageRoutingModule {}
