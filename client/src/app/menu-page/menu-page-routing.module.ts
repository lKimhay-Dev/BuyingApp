import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPagePage } from './menu-page.page';

const routes: Routes = [
  {
    path: 'menu-page',
    component: MenuPagePage
  },
  {
    path: 'acc-management',
    loadChildren: () => import('./acc-management/acc-management.module').then( m => m.AccManagementPageModule)
  },
  {
    path: 'change-purchase-fee',
    loadChildren: () => import('./change-purchase-fee/change-purchase-fee.module').then( m => m.ChangePurchaseFeePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPagePageRoutingModule {}
