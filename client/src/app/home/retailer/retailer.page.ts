import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'
import { ModalTailerPage } from './modal-tailer/modal-tailer.page'


@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.page.html',
  styleUrls: ['./retailer.page.scss'],
})
export class RetailerPage implements OnInit {

  constructor( private modalController: ModalController ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalTailerPage,
      cssClass: 'my-custom-modal-css'
    });
    return await modal.present();
  }

}
