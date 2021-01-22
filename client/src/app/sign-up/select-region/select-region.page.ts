import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalAreaPage } from './modal-area/modal-area.page';

@Component({
  selector: 'app-select-region',
  templateUrl: './select-region.page.html',
  styleUrls: ['./select-region.page.scss'],
})
export class SelectRegionPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async onModal() {
    const modal = await this.modalController.create({
      component: ModalAreaPage, 
    });
    return await modal.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
