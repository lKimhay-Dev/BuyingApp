import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccManagementPage } from 'src/app/pages/menu/acc-management/acc-management.page';

const routes: Routes = [
  {
    path: '',
    component: AccManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccManagementPageRoutingModule {}
