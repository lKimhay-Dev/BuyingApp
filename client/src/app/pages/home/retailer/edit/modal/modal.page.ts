import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { RetailerDto } from 'src/app/dtos/retailer.dto';
import { RetailerService } from 'src/app/services/Retailer/retailer.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {

    retailerDto: RetailerDto;

    constructor(
        private modalCtrl: ModalController,
        private retailerService: RetailerService,
        private navParams: NavParams
    ) {
    }

    ngOnInit() {
        const id: string = this.navParams.get('id');
        this.retailerService.getRetailerById(id).subscribe(res => {
            this.retailerDto = res;
            console.log(this.retailerDto);
        });
    }

    async dismiss() {
        await this.modalCtrl.dismiss({
            dismissed: true
        });
    }

}
