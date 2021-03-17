import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from 'src/app/pages/home/home.page';
import { RegisterGuard } from 'src/app/guards/register.guard';

const routes: Routes = [
    {
        canActivate: [RegisterGuard],
        path: 'home',
        component: HomePage,
        children: [
            {
                path: 'order',
                loadChildren: () => import('src/app/pages/home/order/order.module').then(m => m.OrderPageModule)
            },
            {
                path: 'buy',
                loadChildren: () => import('src/app/pages/home/buy/buy.module').then(m => m.BuyPageModule)
            },
            {
                path: 'calculate',
                loadChildren: () => import('src/app/pages/home/calculate/calculate.module').then(m => m.CalculatePageModule)
            },
            {
                path: 'retailer',
                loadChildren: () => import('src/app/pages/home/retailer/retailer.module').then(m => m.RetailerPageModule)
            },
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
        ],
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'register-retailer',
        loadChildren: () => import('src/app/pages/home/register-retailer/register-retailer.module').then(m => m.RegisterRetailerPageModule)
    },
    {
        path: 'search-location',
        loadChildren: () => import('src/app/pages/home/search-location/search-location.module').then(m => m.SearchLocationPageModule)
    },
    {
        path: 'search-tailer',
        loadChildren: () => import('src/app/pages/home/search-tailer/search-tailer.module').then(m => m.SearchTailerPageModule)
    },
    {
        path: 'edit',
        loadChildren: () => import('src/app/pages/home/retailer/edit/edit.module').then(m => m.EditPageModule)
    },
    {
        path: 'home/retailer/detail',
        loadChildren: () => import('src/app/pages/home/retailer/detail/detail.module').then(m => m.DetailPageModule)
    },
    {
        path: 'buying-basic-fee',
        loadChildren: () => import('src/app/pages/home/buying-basic-fee/buying-basic-fee.module').then(m => m.BuyingBasicFeePageModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {
}
