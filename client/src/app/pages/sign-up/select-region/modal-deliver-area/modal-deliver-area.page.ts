import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DeliverAreaService } from 'src/app/services/deliver-area/deliver-area.service';

@Component({
    selector: 'app-modal-deliver-area',
    templateUrl: './modal-deliver-area.page.html',
    styleUrls: ['./modal-deliver-area.page.scss'],
})
export class ModalDeliverAreaPage implements OnInit {

    stateDeliverArea: any;

    constructor(
        private modalController: ModalController,
        private deliverAreaService: DeliverAreaService) {
    }

    ngOnInit() {
        this.deliverAreaService.getDeliverArea().subscribe(res => {
            this.stateDeliverArea = res;
        });
    }

    async selectArea(event) {
        // console.log(event.target.value);
        await this.modalController.dismiss(event.target.value);
    }

    async closeModal() {
        await this.modalController.dismiss();
    }

}
