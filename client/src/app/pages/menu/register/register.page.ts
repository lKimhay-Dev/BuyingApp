import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserDto } from 'src/app/dtos/user.dto';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    isAgree: boolean;
    user: UserDto;

    constructor(
        public alertController: AlertController
    ) {
    }

    ngOnInit() {
    }

    chkDelete() {
        document.getElementById('arow-back').style.color = 'blue';
        this.isAgree = false;
    }

    async deleteAcc() {
        const alert = await this.alertController.create({
            header: '확실해?',
            message: '소배처 정보, 사업이력, 정산이력 등을 포함하는 모든정보',
            buttons: [
                {
                    text: 'Disagree',
                    role: 'cancel',
                    cssClass: 'secondary'
                }, {
                    text: 'Agree',
                    handler: () => {

                    }
                }
            ]
        });

        await alert.present();
    }


}
