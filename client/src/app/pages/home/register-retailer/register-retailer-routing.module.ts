import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterRetailerPage } from 'src/app/pages/home/register-retailer/register-retailer.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterRetailerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRetailerPageRoutingModule {}
