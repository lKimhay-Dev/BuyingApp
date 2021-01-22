import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isAgree: boolean;

  constructor(public alertController: AlertController) { }

  ngOnInit() { }

  chkDelete() {
    document.getElementById('arow-back').style.color = 'blue';
    this.isAgree = false;
  }

  async deleteAcc() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '확실해?',
      message: '소배처 정보, 사업이력, 정산이력 등을 포함하는 모든정보',
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Canceled Delete');
          }
        }, {
          text: 'Agree',
          handler: () => {
            console.log('Confirm to Delete Account');
            localStorage.removeItem('userData');
            window.location.href = '/home';
          }
        }
      ]
    });

    await alert.present();
  }


}
