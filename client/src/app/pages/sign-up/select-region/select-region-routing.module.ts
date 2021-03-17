import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectRegionPage } from 'src/app/pages/sign-up/select-region/select-region.page';

const routes: Routes = [
    {
        path: '',
        component: SelectRegionPage
    },
    {
        path: 'modal-area',
        loadChildren: () => import('src/app/pages/sign-up/select-region/modal-area/modal-area.module').then(m => m.ModalAreaPageModule)
    },
    {
        path: 'modal-deliver-area',
        // tslint:disable-next-line:max-line-length
        loadChildren: () => import('src/app/pages/sign-up/select-region/modal-deliver-area/modal-deliver-area.module').then(m => m.ModalDeliverAreaPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SelectRegionPageRoutingModule {
}
