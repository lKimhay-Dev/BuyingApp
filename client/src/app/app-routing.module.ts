import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },   
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-up/select-region',
    loadChildren: () => import('./sign-up/select-region/select-region.module').then( m => m.SelectRegionPageModule)
  },
  {
    path: 'change-purchase-fee',
    loadChildren: () => import('./menu-page/change-purchase-fee/change-purchase-fee.module').then( m => m.ChangePurchaseFeePageModule)
  },
  {
    path: 'acc-management',
    loadChildren: () => import('./menu-page/acc-management/acc-management.module').then( m => m.AccManagementPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./menu-page/register/register.module').then( m => m.RegisterPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
