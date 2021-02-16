import { Component } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { RetailerService } from '../../../service/Retailer/retailer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})

export class EditPage {

  checked: boolean[] = [];
  isCheck: boolean = true;
  listRetailerId: Array<string> = [];
  data: any

  constructor(private modalCtrl: ModalController,
    private alertController: AlertController,
    private retailerService: RetailerService,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    this.retailerService.getRetailer().subscribe(res => {
      this.data = res
    });
  }

  async openModal(i: number) {
    let id = this.data[i]._id;

    // Collect checked id
    if (!this.checked[i]) {
      this.listRetailerId.push(id)
    } else {
      const index = this.listRetailerId.indexOf(id)
      if (index > -1) {
        this.listRetailerId.splice(index, 1);
      }
    }

    // Check enable button
    (this.listRetailerId.length == 0) ? this.isCheck = true : this.isCheck = false;

    // Call Popup
    if (!this.checked[i]) {
      const myModal = await this.modalCtrl.create({
        component: ModalPage,
        cssClass: 'my-custom-modal-css',
        componentProps: {
          id: id
        }
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
            console.log('Canceled De-Active Retailer');
          }
        },
        {
          text: '삭제',
          cssClass: 'alert-btn-ok',
          handler: () => {
            for (let i = 0; i < this.listRetailerId.length; i++) {
              let id = this.listRetailerId[i];
              this.retailerService.deActiveRetailer(id).subscribe(res => {
                console.log("De-Active Retailer Successfully!");
              });
            }
            this.navCtrl.navigateRoot('/home/retailer');
          }
        }
      ]
    });
    await alert.present();
  }

}
