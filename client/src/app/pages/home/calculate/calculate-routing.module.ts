import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatePage } from 'src/app/pages/home/calculate/calculate.page';

const routes: Routes = [
  {
    path: '',
    component: CalculatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatePageRoutingModule {}
