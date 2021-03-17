import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from 'src/app/pages/menu/menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage
  },
  {
    path: 'acc-management',
    loadChildren: () => import('src/app/pages/menu/acc-management/acc-management.module').then(m => m.AccManagementPageModule)
  },
  {
    path: 'change-purchase-fee',
    loadChildren: () => import('src/app/pages/menu/change-purchase-fee/change-purchase-fee.module').then(m => m.ChangePurchaseFeePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('src/app/pages/menu/register/register.module').then(m => m.RegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPagePageRoutingModule {}
