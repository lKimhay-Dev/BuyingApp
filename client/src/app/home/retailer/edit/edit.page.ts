import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})

export class EditPage{

  checked: boolean = false;
  
  constructor(private modalCtrl: ModalController, 
              private alertController: AlertController) { }

  async openModal() {
    if(!this.checked){
      const myModal = await this.modalCtrl.create({
        component: ModalPage,
        cssClass: 'my-custom-modal-css'
      });
      return await myModal.present();
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '해당 소매처를 삭제하겠습까?',
      message: '삭제 시 해당 소매처와 관련된 모든 정보가 식제되며, 복구가 불가능합니다.',
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          handler: (blah) => {
            console.log('Cancel: blah');
          }
        }, 
        {
          text: '삭제',
          cssClass: 'alert-btn-ok',
          handler: () => {
            console.log('Okay');
          }
        }
      ]
    });
    await alert.present();
  }

}
