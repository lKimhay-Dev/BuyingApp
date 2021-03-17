import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTailerPage } from 'src/app/pages/home/search-tailer/search-tailer.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTailerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTailerPageRoutingModule {}
