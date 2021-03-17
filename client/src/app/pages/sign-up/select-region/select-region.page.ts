import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { BuyingAreaService } from 'src/app/services/buying-area/buying-area.service';
import { DeliverAreaService } from 'src/app/services/deliver-area/deliver-area.service';
import { ModalAreaPage } from 'src/app/pages/sign-up/select-region/modal-area/modal-area.page';
import { ModalDeliverAreaPage } from 'src/app/pages/sign-up/select-region/modal-deliver-area/modal-deliver-area.page';

@Component({
    selector: 'app-select-region',
    templateUrl: './select-region.page.html',
    styleUrls: ['./select-region.page.scss'],
})
export class SelectRegionPage implements OnInit {

    user: any;
    area: any;
    buyAreaId: any;
    buyArea = '-- 선택해 주세요 --';
    deliverAreaId: any;
    deliverArea = '-- 선택해 주세요 --';
    selectedArea = false;

    constructor(
        private modalController: ModalController,
        private buyingAreaService: BuyingAreaService,
        private deliverAreaService: DeliverAreaService,
        public navCtrl: NavController
    ) {
    }

    ngOnInit() {
    }

    async modelBuyingArea() {
        const modal = await this.modalController.create({
            component: ModalAreaPage,
            componentProps: {area: this.buyArea},
        });
        modal.onDidDismiss()
            .then((data) => {
                if (data.data != null) {
                    this.buyingAreaService.getBuyingAreaById(data.data).subscribe(res => {
                        this.buyAreaId = res._id;
                        this.buyArea = res.area_ko;
                        this.selectedArea = true;
                    });
                } else {
                    this.buyArea = '-- 선택해 주세요 --';
                    this.selectedArea = false;
                }
            });
        return await modal.present();
    }

    async modelDeliverArea() {
        const modal = await this.modalController.create({
            component: ModalDeliverAreaPage,
            componentProps: {area: this.deliverArea},
        });
        modal.onDidDismiss()
            .then((data) => {
                if (data.data != null) {
                    this.deliverAreaService.getDeliverAreaById(data.data).subscribe(res => {
                        this.deliverAreaId = res._id;
                        this.deliverArea = res.area_ko;
                        this.selectedArea = true;
                    });
                } else {
                    this.buyArea = '-- 선택해 주세요 --';
                    this.selectedArea = false;
                }
            });
        return await modal.present();
    }

    async next() {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                area: 'buyArea,' + this.buyAreaId + ',deliverArea,' + this.deliverAreaId
            }
        };
        await this.navCtrl.navigateForward(['buying-basic-fee'], navigationExtras);
    }

    async dismissModal() {
        await this.modalController.dismiss();
    }
}
