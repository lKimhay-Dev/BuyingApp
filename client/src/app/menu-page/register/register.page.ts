import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserDto } from 'src/app/Dto/user.Dto';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  isAgree: boolean;
  user: UserDto;

  constructor(
    private router: Router,
    public alertController: AlertController,
    private userService: UserService
  ) { }

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
            let id = JSON.parse(localStorage.getItem('userData')).uid;
            console.log(id);
            
            this.userService.deActiveUser(id).subscribe((res) => {
            console.log('Account Deleted!');
            localStorage.removeItem('userData');
            localStorage.setItem('isLogin', 'false');
            window.location.href = '/login';
            });
            
          }
        }
      ]
    });

    await alert.present();
  }


}
