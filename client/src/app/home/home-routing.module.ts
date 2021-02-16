import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    children: [
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
      },
      {
        path: 'buy',
        loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
      },
      {
        path: 'calculate',
        loadChildren: () => import('./calculate/calculate.module').then( m => m.CalculatePageModule)
      },
      {
        path: 'retailer',
        loadChildren: () => import('./retailer/retailer.module').then( m => m.RetailerPageModule)
      },
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: 'register-retailer',
    loadChildren: () => import('./register-retailer/register-retailer.module').then( m => m.RegisterRetailerPageModule)
  },
  {
    path: 'search-location',
    loadChildren: () => import('./search-location/search-location.module').then( m => m.SearchLocationPageModule)
  },
  {
    path: 'search-tailer',
    loadChildren: () => import('./search-tailer/search-tailer.module').then( m => m.SearchTailerPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./retailer/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'home/retailer/detail',
    loadChildren: () => import('./retailer/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'buying-basic-fee',
    loadChildren: () => import('./buying-basic-fee/buying-basic-fee.module').then( m => m.BuyingBasicFeePageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
